import { Pipeline } from '@/domain/pipeline'
import { applyCanvasFilter } from './canvasFilters'
import { RuntimeImage } from '@/domain/image'

export async function renderPipelineToCanvas(
  canvas: HTMLCanvasElement,
  runtimeImage: RuntimeImage,
  pipeline: Pipeline
) {
  const ctx = canvas.getContext('2d')!
  canvas.width = runtimeImage.width
  canvas.height = runtimeImage.height

  // 1. 先画原图
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(runtimeImage.image, 0, 0)

  // 2. 依次应用 filter
  for (const filter of pipeline.filters) {
    applyCanvasFilter(ctx, filter)
  }
}
