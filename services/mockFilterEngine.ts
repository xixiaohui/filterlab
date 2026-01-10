import { Filter } from "@/domain/filter";
import { Image } from "@/domain/image";
import { FilterEngine } from "./filterEngine";


export class MockFilterEngine implements FilterEngine{
    apply(image: Image, filter: Filter): Image {
        
        // 模拟：返回一个“新 Image”
        return {
            ...image,
            id:`${image.id}-${filter.id}`,
        }
    }
    
}