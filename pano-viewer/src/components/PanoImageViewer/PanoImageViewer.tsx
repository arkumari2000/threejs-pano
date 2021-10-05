import React from "react";
import * as THREE from "three";
import { ThreeCanvas } from "../ThreeCanvas/ThreeCanvas";
import { useCountRenders } from "../../hooks/useCountRenders";
import { BottomBar } from '../BottomBar/BottomBar';
import { LeftBar } from '../LeftBar/LeftBar';
import { ZoomBar } from '../ZoomBar/ZoomBar';


export const PanoImageViewer: React.FC = () => {
  // debug info, will keep this react becomes stable
  useCountRenders("PanoImageViewer");
  let camera: THREE.PerspectiveCamera, scene: THREE.Scene;
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1100
  );

  scene = new THREE.Scene();

  const geometry = new THREE.SphereGeometry(500, 60, 40);

  geometry.scale(-1, 1, 1);

  const texture = new THREE.TextureLoader().load(
    "https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg"
  );
  const material: any = new THREE.MeshBasicMaterial({ map: texture });

  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

  return (
    <>
      <ThreeCanvas scene={scene} camera={camera} />
      <LeftBar></LeftBar>
      <BottomBar></BottomBar>
      <ZoomBar></ZoomBar>
    </>
  );
};
