"use client";

import { useEditor } from "@/features/editor/useEditor";
import { useEditorCommands } from "@/features/editor/useEditorCommands";
import { Image } from "@/domain/image";
import { exportEditorState } from "@/features/editor/exportState";

export default function EditorPage() {
  const { state, dispatch } = useEditor();
  const editor = useEditorCommands(dispatch);

  const testImage: Image = {
    id: "img1",
    width: 100,
    height: 100,
    source: null,
  };

  console.log("Editor page render");

  return (
    <div>
      <h1 className="text-4xl text-blue-700 tracking-tighter text-balance ">
        Image Editor
      </h1>
      const editor = useEditorCommands(dispatch)
      <button
        className="bg-sky-500 hover:bg-sky-700 rounded-xs m-7"
        onClick={() => editor.loadImage(testImage)}
      >
        Load
      </button>
      <button
        className="bg-sky-500 hover:bg-sky-700 rounded-xs m-7"
        onClick={() => editor.addFilter("blur")}
      >
        Blur
      </button>
      <button
        className="bg-sky-500 hover:bg-sky-700 rounded-xs m-7"
        onClick={() => editor.apply()}
      >
        Apply
      </button>
      <button
        className="bg-sky-500 hover:bg-sky-700 rounded-xs m-7"
        onClick={() => editor.undo()}
      >
        Undo
      </button>
      <button
        className="bg-sky-500 hover:bg-sky-700 rounded-xs m-7"
        onClick={() => {
          const data = exportEditorState(state);
          console.log(JSON.stringify(data, null, 2));
        }}
      >
        Export JSON
      </button>
      <button
        className="bg-sky-500 hover:bg-sky-700 rounded-xs m-7"
        onClick={()=>{
          const json = prompt('Paste state JSON')
          if (!json) return
          dispatch({
            type: 'IMPORT',
            state: JSON.parse(json),
          })
        }}
      >
        Import JSON
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
