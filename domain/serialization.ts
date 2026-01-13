import { Image } from './image'
import { Pipeline } from './pipeline'

export interface SerializedSnapshot {
  originalImage: Image | null
  pipeline: Pipeline | null
}

export interface SerializedEditorState {
  version: 1
  snapshot: SerializedSnapshot
}
