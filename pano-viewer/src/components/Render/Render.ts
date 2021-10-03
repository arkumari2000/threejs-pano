import * as THREE from 'three';

export function RenderMesh(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  Mesh: THREE.Mesh
) {
  function render(time: number) {
    time *= 0.0001;

    if (needResize(renderer)) {
      resizeRendererToDisplaySize(renderer);
      resetCameraAspectRatio(renderer, camera);
    }

    Mesh.rotation.x = time;
    Mesh.rotation.y = time / 2;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

function needResize(renderer: THREE.WebGLRenderer) {
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
