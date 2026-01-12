import { Image } from "@/domain/image";
import { Filter } from "@/domain/filter";

export type EditorAction =
  | { type: "LOAD_IMAGE"; image: Image }
  | { type: "ADD_FILTER"; filter: Filter }
  | { type: "REMOVE_FILTER"; filterId: string }
  | { type: "APPLY_PIPELINE" }
  | { type: "RESET" }
  | { type: 'UNDO' }
  | { type: 'REDO' };
