// import { Pipeline } from "@/domain/pipeline"
// import { applyPipeline } from "@/services/applyPipeline"
// import { MockFilterEngine } from "@/services/mockFilterEngine"


// const image = {id:'img1',width:100,height:100,source:null}

// const pipeline:Pipeline = {
//     id:"p1",

//     filters:[
//         {id:'blur',name:"Blur",params:[]},
//         { id: 'contrast', name: 'Contrast', params: [] },
//     ],
// }

// applyPipeline(image, pipeline, new MockFilterEngine())


import { editorReducer } from "@/features/editor/editorController";

import { MockFilterEngine } from "@/services/mockFilterEngine";

let state = {
  originalImage: null,
  currentImage: null,
  pipeline: null,
}


state = editorReducer(
    state,
    {
        type:'LOAD_IMAGE',
        image:{id:'img1',width:100,height:100,source:null}
    },
    new MockFilterEngine()
)

state = editorReducer(
    state,
    {
        type:'ADD_FILTER',
        filter:{id:'blur',name:'Blur',params:[]}
    },
    new MockFilterEngine()
)

state = editorReducer(
    state,
    {type:'APPLY_PIPELINE'},
    new MockFilterEngine()
)

console.log('state:', state.currentImage)


