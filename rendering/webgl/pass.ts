export function runPass(
  gl: WebGL2RenderingContext,
  program: WebGLProgram,
  inputTexture: WebGLTexture,
  outputFBO: WebGLFramebuffer,
  width: number,
  height: number
) {
  gl.bindFramebuffer(gl.FRAMEBUFFER, outputFBO);
  gl.viewport(0, 0, width, height);

  gl.useProgram(program);

  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, inputTexture);
  gl.uniform1i(gl.getUniformLocation(program, "u_texture"), 0);

  drawFullScreenQuad(gl);
}
