import { Pipeline } from "@/domain/pipeline";
import { FilterEngine } from "./filterEngine";
import { Image } from "@/domain/image";


export function applyPipeline(
    image:Image,
    pipeline:Pipeline,
    engine:FilterEngine
):Image {
    return pipeline.filters.reduce((currentImage, filter) => {
    return engine.apply(currentImage, filter)
  }, image)
}