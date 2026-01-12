"use client";

import { useCallback } from "react";
import { EditorAction } from "./editorActions";
import { FilterCatalog } from "@/services/filterCatalog";
import { Image } from "@/domain/image";

export function useEditorCommands(dispatch: (a: EditorAction) => void) {
  const loadImage = useCallback(
    (image: Image) => dispatch({ type: "LOAD_IMAGE", image }),
    [dispatch]
  );

  const addFilter = useCallback(
    (filterId: string) => {
      const filter = FilterCatalog.create(filterId);
      dispatch({ type: "ADD_FILTER", filter });
    },
    [dispatch]
  );

  const apply = useCallback(
    () => dispatch({ type: "APPLY_PIPELINE" }),
    [dispatch]
  );

  const undo = useCallback(() => dispatch({ type: "UNDO" }), [dispatch]);

  const redo = useCallback(() => dispatch({ type: "REDO" }), [dispatch]);

  return {
    loadImage,
    addFilter,
    apply,
    undo,
    redo,
  };
}
