import { Image } from "@/domain/image";
import { Pipeline } from "../../domain/pipeline";

// export interface EditorState {
//   originalImage: Image | null;
//   currentImage: Image | null;
//   pipeline: Pipeline | null;
// }


export interface Snapshot{

  originalImage: Image | null;
  currentImage: Image | null;
  pipeline: Pipeline | null;
  isInitial?: boolean
}

export interface EditorState {

    past: Snapshot[]
    present:Snapshot
    future:Snapshot[]
}