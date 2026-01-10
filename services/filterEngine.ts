import { Filter } from "@/domain/filter";
import { Image } from "@/domain/image";


export interface FilterEngine {
    apply(image:Image,filter:Filter):Image
}