import { useEffect, useMemo, useRef } from "react";
import * as THREE from 'three';
import { Vector3 } from "three";

export default function ModelInstances({ model, scaleMin=1, scaleMax=1, count=10, positions = [], spread = [1,1,1], rotationSpeed = [0,0,0] }) {
    const temp = new THREE.Object3D();
    const instancedMeshRef = useRef();

    useEffect(() => {
        const mesh = instancedMeshRef.current;
        if (!mesh) return;

        let geometry = null;
        let material = new THREE.MeshStandardMaterial();
        let scale = new THREE.Vector3(1, 1, 1);
        let rotation = new THREE.Euler();

        model.scene.traverse((child) => {
            if (child.isMesh) {
                geometry = child.geometry;
                material = child.material;
                scale.copy(child.scale);
                rotation.copy(child.rotation);
            }
        });

        if (!geometry) {
            console.error('No mesh geometry found in the loaded GLTF model.');
            return;
        }
        const _count = Math.max(count, positions.length);

        const instancedMesh = new THREE.InstancedMesh(geometry, material, _count);
        mesh.children.forEach(c => mesh.remove(c));
        mesh.add(instancedMesh);

        instancedMesh.scale.copy(scale);
        instancedMesh.rotation.copy(rotation);

        var _tp;
        for (let i = 0; i < _count; i++) {
            if(i<positions.length) _tp = new Vector3(positions[i][0],positions[i][1],positions[i][2]);
            else _tp = new Vector3(Math.random()*spread[0], Math.random()*spread[1], Math.random()*spread[2]);

            temp.position.copy(_tp);
            temp.scale.copy(scale);
            temp.scale.multiplyScalar(scaleMin + Math.random() * (scaleMax - scaleMin));
            temp.rotation.z = Math.random() * 3.14;

            temp.updateMatrix();
            instancedMesh.setMatrixAt(i, temp.matrix);
        }

        instancedMesh.instanceMatrix.needsUpdate = true;
    }, [model, count, positions]);

    console.log(instancedMeshRef);

    return (
        <group ref={instancedMeshRef} />
    );
}
