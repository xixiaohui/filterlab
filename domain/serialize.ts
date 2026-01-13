
import { SerializedSnapshot } from '@/domain/serialization'
import { Snapshot } from '@/features/editor/editorState'

export function serializeSnapshot(
  snapshot: Snapshot
): SerializedSnapshot {
  return {
    originalImage: snapshot.originalImage,
    pipeline: snapshot.pipeline,
  }
}
