
import { SerializedEditorState } from '@/domain/serialization'
import { EditorState } from './editorState'
import { serializeSnapshot } from '@/domain/serialize'

export function exportEditorState(
  state: EditorState
): SerializedEditorState {
  return {
    version: 1,
    snapshot: serializeSnapshot(state.present),
  }
}
