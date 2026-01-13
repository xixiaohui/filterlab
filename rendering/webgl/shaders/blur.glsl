#version 300 es
precision highp float;

uniform sampler2D u_texture;
uniform vec2 u_texSize;

in vec2 v_uv;
out vec4 outColor;

void main() {
  vec2 px = 1.0 / u_texSize;

  vec4 color =
    texture(u_texture, v_uv) * 0.36 +
    texture(u_texture, v_uv + vec2(px.x, 0.0)) * 0.16 +
    texture(u_texture, v_uv - vec2(px.x, 0.0)) * 0.16 +
    texture(u_texture, v_uv + vec2(0.0, px.y)) * 0.16 +
    texture(u_texture, v_uv - vec2(0.0, px.y)) * 0.16;

  outColor = color;
}
