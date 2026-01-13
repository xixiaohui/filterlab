"use client";

import { useReducer, useMemo } from "react";
import { pipeline } from "stream";
import { EditorState, Snapshot } from "./editorState";
import { FilterEngine } from "@/services/filterEngine";
import { MockFilterEngine } from "@/services/mockFilterEngine";
import { EditorAction } from "./editorActions";
import { editorReducer } from "./editorController";

const initialSnapshot: Snapshot = {
  originalImage: null,
  currentImage: null,
  pipeline: null,
  isInitial: true,
};

export const initialEditorState: EditorState = {
  past: [],
  present: initialSnapshot,
  future: [],
};

export function createStateFromSnapshot(snapshot: Snapshot): EditorState {
  return {
    past: [],
    present: snapshot,
    future: [],
  };
}

export function useEditor(engine?: FilterEngine) {
  const filterEngine = useMemo(
    () => engine ?? new MockFilterEngine(),
    [engine]
  );

  const [state, dispatchBase] = useReducer(
    (state: EditorState, action: EditorAction) =>
      editorReducer(state, action, filterEngine),
    initialEditorState
  );

  return {
    state,
    dispatch: dispatchBase,
  };
}
