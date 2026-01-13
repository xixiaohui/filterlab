import { createFramebuffer } from "./framebuffer"
import { createTexture } from "./texture"

export class PingPong {
  private index = 0
  private textures: WebGLTexture[]
  private framebuffers: WebGLFramebuffer[]

  constructor(
    private gl: WebGL2RenderingContext,
    width: number,
    height: number
  ) {
    const texA = createTexture(gl, width, height)
    const texB = createTexture(gl, width, height)

    this.textures = [texA, texB]
    this.framebuffers = [
      createFramebuffer(gl, texA),
      createFramebuffer(gl, texB),
    ]
  }

  get inputTexture() {
    return this.textures[this.index]
  }

  get outputFramebuffer() {
    return this.framebuffers[1 - this.index]
  }

  swap() {
    this.index = 1 - this.index
  }
}
