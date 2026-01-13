

export function createShader(
  gl: WebGL2RenderingContext,
  type: number,
  source: string
) {
  const shader = gl.createShader(type)!
  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) || 'Shader error')
  }

  return shader
}

export function createProgram(
  gl: WebGL2RenderingContext,
  vs: string,
  fs: string
) {
  const program = gl.createProgram()!
  gl.attachShader(gl, createShader(gl, gl.VERTEX_SHADER, vs))
  gl.attachShader(gl, createShader(gl, gl.FRAGMENT_SHADER, fs))
  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program) || 'Program error')
  }

  return program
}
