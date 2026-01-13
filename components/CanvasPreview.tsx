"use client";

import { useEffect, useRef } from "react";
import { Pipeline } from "@/domain/pipeline";
import { renderPipelineToCanvas } from "@/rendering/canvasRenderer";

interface Props {
  imageUrl: string;
  pipeline: Pipeline | null;
}

export function CanvasPreview({ imageUrl, pipeline }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!pipeline || !canvasRef.current) return;

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      renderPipelineToCanvas(
        canvasRef.current!,
        { image: img, width: img.width, height: img.height },
        pipeline
      );
    };
  }, [imageUrl, pipeline]);

  return <canvas ref={canvasRef} />;
}
