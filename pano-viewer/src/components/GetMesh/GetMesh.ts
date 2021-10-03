import * as THREE from 'three'

export const GetMesh = (imageUrl: string) => {
    const loadManager = new THREE.LoadingManager();
    const loader = new THREE.TextureLoader(loadManager);

    const geometry = new THREE.SphereBufferGeometry(500, 60, 40)

    const material = new THREE.MeshBasicMaterial( {
        map: loader.load(imageUrl),
        color: 0xffffff, 
        alphaTest: 0,
        visible: true,
        side: THREE.BackSide
    } );
    
    const sphereMesh = new THREE.Mesh(geometry, material);
    return sphereMesh
}