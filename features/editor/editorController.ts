import { EditorState, Snapshot } from "./editorState";
import { EditorAction } from "./editorActions";
import { applyPipeline } from "@/services/applyPipeline";
import { FilterEngine } from "@/services/filterEngine";
import { deserializeSnapshot } from "./deserialize";
import { createStateFromSnapshot } from "./useEditor";


function isSameSnapshot(a: Snapshot, b: Snapshot) {
  return JSON.stringify(a) === JSON.stringify(b)
}

function commit(state: EditorState, newPresent: Snapshot): EditorState {
  // 1️⃣ 相同状态，不产生历史
  if (isSameSnapshot(state.present, newPresent)) {
    return state
  }

   // 2️⃣ 决定新的 past
  const shouldPush =
    !state.present.isInitial

  const newPast = shouldPush
    ? [...state.past, state.present]
    : state.past

  // 3️⃣ 返回新状态
  return {
    past: newPast,
    present: newPresent,
    future: [],
  }
}

export function editorReducer(
  state: EditorState,
  action: EditorAction,
  engine: FilterEngine
): EditorState {
  switch (action.type) {
    case "LOAD_IMAGE":{
      const next: Snapshot = {
        originalImage: action.image,
        currentImage: action.image,
        pipeline: { id: "default", filters: [] },
      };
      if (state.present.originalImage === null) {
        return {
          past: [],
          present: next,
          future: [],
        }
      }
      return commit(state, next);
    }
    case "UNDO": {
      if (state.past.length === 0) return state;
      const previous = state.past[state.past.length - 1];
      const newPast = state.past.slice(0, -1);
      return {
        past: newPast,
        present: previous,
        future: [state.present, ...state.future],
      };
    }
    case "REDO": {
      if (state.future.length === 0) return state;
      const next = state.future[0];
      const newFuture = state.future.slice(1);

      return {
        past: [...state.past, state.present],
        present: next,
        future: newFuture,
      };
    }
    case 'ADD_FILTER': {
      if (!state.present.pipeline) return state

      return {
        ...state,
        present: {
          ...state.present,
          pipeline: {
            ...state.present.pipeline,
            filters: [
              ...state.present.pipeline.filters,
              action.filter,
            ],
          },
        },
      }
    }
    // case "REMOVE_FILTER":
    //   if (!state.pipeline) return state;
    //   return {
    //     ...state,
    //     pipeline: {
    //       ...state.pipeline,
    //       filters: state.pipeline.filters.filter(
    //         (f) => f.id != action.filterId
    //       ),
    //     },
    //   };

    case "APPLY_PIPELINE":{
      if (!state.present.pipeline || !state.present.originalImage) {
        return state;
      }
      const output = applyPipeline(
        state.present.originalImage,
        state.present.pipeline,
        engine
      );
      const next: Snapshot = {
        ...state.present,
        currentImage: output,
      };

      return commit(state, next);
    }
    // case "RESET":
    //   return {
    //     ...state,
    //     currentImage: state.originalImage,
    //     pipeline: {
    //       ...state.pipeline!,
    //       filters: [],
    //     },
    //   };
    case 'IMPORT': {
      const snapshot = deserializeSnapshot(action.state.snapshot)
      return createStateFromSnapshot(snapshot)
    }
    default:
      return state;
  }
}
