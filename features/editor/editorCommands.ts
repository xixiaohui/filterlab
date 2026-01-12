import { Image } from '@/domain/image'
import { Filter } from '@/domain/filter'

export interface EditorCommands {
  loadImage(image: Image): void
  addFilter(filterId: string): void
  apply(): void
  undo(): void
  redo(): void
}
