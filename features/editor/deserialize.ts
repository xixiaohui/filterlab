import { SerializedSnapshot } from '@/domain/serialization'
import { Snapshot } from './editorState'


export function deserializeSnapshot(
  data: SerializedSnapshot
): Snapshot {
  return {
    originalImage: data.originalImage,
    pipeline: data.pipeline,
    currentImage: data.originalImage,
    isInitial: false,
  }
}
