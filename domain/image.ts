
//  ⭐ 领域模型


export interface Image {
  id: string

  width: number
  height: number

  /**
   * 图像源，不限定实现
   * 可以是 URL / ImageBitmap / ArrayBuffer
   */
  source: unknown
}


export interface RuntimeImage {
  image: HTMLImageElement
  width: number
  height: number
}