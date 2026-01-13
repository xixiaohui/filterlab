import { Pipeline } from "@/domain/pipeline"
import { PingPong } from "./pingPong"
import { runPass } from "./pass"

export function renderPipelineWebGL(
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  pipeline: Pipeline
) {
  const gl = canvas.getContext('webgl2')!
  canvas.width = image.width
  canvas.height = image.height

  const pingpong = new PingPong(gl, canvas.width, canvas.height)

  // 1️⃣ 原图 → inputTexture
  uploadImageToTexture(gl, pingpong.inputTexture, image)

  // 2️⃣ 多 pass
  for (const filter of pipeline.filters) {
    const program = ShaderLibrary.get(filter.id)
    runPass(
      gl,
      program,
      pingpong.inputTexture,
      pingpong.outputFramebuffer,
      canvas.width,
      canvas.height
    )
    pingpong.swap()
  }

  // 3️⃣ 最终输出到屏幕
  gl.bindFramebuffer(gl.FRAMEBUFFER, null)
  drawTextureToScreen(gl, pingpong.inputTexture)
}
