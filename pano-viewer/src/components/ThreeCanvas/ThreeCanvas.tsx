import React, { useRef, useLayoutEffect, useEffect } from "react";
import * as THREE from "three";
import { initDefaultControls } from "../Controls/DefaultControls";
import { useCountRenders } from "../../hooks/useCountRenders";

interface Props {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  onUpdate?: () => void;
  onContextMenu?: () => void;
}

// A responsive Three.js scene rendering canvas with default controls
// Default controls is an added responsibility, will remove it when a better design is identified
export const ThreeCanvas: React.FC<Props> = ({
  scene,
  camera,
  onUpdate,
  onContextMenu,
}) => {
  // debug info, will keep this react becomes stable
  useCountRenders("ThreeCanvas");

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current as HTMLCanvasElement | THREE.OffscreenCanvas | undefined,
    });

    // const disposeControls = initDefaultControls(canvasRef.current, camera);

    const animate = () => {
      if (resizeRenderer(renderer)) {
        resizeRendererToDisplaySize(renderer);
        resetCameraAspectRatio(renderer, camera);
      }
      requestAnimationFrame(animate);

      if (onUpdate) onUpdate();

      renderer.render(scene, camera);
    };

    animate();
    return () => {
      // disposeControls();
    };
  }, []);

  // useEffect(() => {
  //   canvasRef.current.addEventListener("contextmenu", onContextMenu);
  //   return () => {
  //     canvasRef.current.removeEventListener("contextmenu", onContextMenu);
  //   };
  // }, [onContextMenu]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100vh" }}
        width={1920}
        height={1080}
      ></canvas>
    </>
  );
};

function resizeRenderer(renderer: THREE.WebGLRenderer) {
  const canvas = renderer.domElement;
  return (
    canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight
  );
}

function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
  const canvas = renderer.domElement;
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
}

function resetCameraAspectRatio(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera
) {
  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
}