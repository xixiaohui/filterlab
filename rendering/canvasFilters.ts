import { Filter } from "../domain/filter";


export function applyCanvasFilter(
    ctx:CanvasRenderingContext2D,
    filter:Filter
){
    switch (filter.id) {
    case 'blur':
      ctx.filter = 'blur(5px)'
      redraw(ctx)
      break

    case 'brightness':
      ctx.filter = 'brightness(120%)'
      redraw(ctx)
      break

    default:
      console.warn('Unknown filter', filter.id)
  }

  ctx.filter = 'none'
}

function redraw(ctx: CanvasRenderingContext2D) {
  const canvas = ctx.canvas
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.putImageData(imgData, 0, 0)
}