import React, { useLayoutEffect } from 'react';
import * as THREE from 'three';
import { GetMesh } from '../GetMesh/GetMesh';
import { RenderMesh } from '../Render/Render';
import { CameraMouseControls } from '../Controls/Controls';

export const PanoViewer = () => {
  useLayoutEffect(() => {
    const canvas = document.querySelector('#sphere-inside');
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas as HTMLCanvasElement | THREE.OffscreenCanvas | undefined,
    });
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, 2, 0.01, 1000);
    camera.position.z = 100;

    new CameraMouseControls(camera, canvas)

    scene.background = new THREE.Color(0xaaaaaa);

    const SphereMesh = GetMesh(
      'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/111199290/original/f01196f2dd686325be692b9286c4417508d394c3/create-360-degree-panorama-render-from-3d-model.jpg'
    );

    scene.add(SphereMesh);

    RenderMesh(renderer, camera, scene, SphereMesh)
  }, []);

  return (
    <div>
      <canvas
        id='sphere-inside'
        style={{ display: 'block', width: '100%', height: '100%' }}
        width={1920}
        height={1080}
      ></canvas>
    </div>
  );
};