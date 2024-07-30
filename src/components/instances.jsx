import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from 'three';
import { Euler, Matrix4, Quaternion, Vector3 } from "three";
import { getLoader, ModelTypes } from "./utils/loader";

/*
    count should always be set
    - set positions to list of coordinates for each model-instance if you have predefined positions
    - leave positions empty and set spread to some value along with offset to randomly
    place instances in different positions
*/

export default function ModelInstances({ 
    path,
    type = ModelTypes.glb,
    count = 1,
    positions = [],
    spread = {x:1, y:1, z:1}, offset = {x:0, y:0, z:0},
    scaleMin = 0.1, scaleMax = 1,
    rotationSpeed = {x:0, y:0, z:0}
}) {

    const loader = getLoader(type);
    const model = loader(path);

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
        mesh.children.forEach(c => {
            c.dispose();  // *** very important for preventing resource leak ***
            mesh.remove(c)
        });
        mesh.add(instancedMesh);

        instancedMesh.scale.copy(scale);
        instancedMesh.rotation.copy(rotation);

        var _tp;
        for (let i = 0; i < _count; i++) {
            _tp = new Vector3();
            if (i < positions.length) _tp.set(positions[i].x, positions[i].y, positions[i].z);
            else {
                _tp.set(
                    offset.x + (Math.random() - 0.5) * spread.x,
                    offset.y + (Math.random() - 0.5) * spread.y,
                    offset.z + (Math.random() - 0.5) * spread.z
                );
            }

            temp.position.copy(_tp);
            temp.scale.copy(scale);
            temp.scale.multiplyScalar(scaleMin + Math.random() * (scaleMax - scaleMin));
            temp.rotation.z = Math.random() * 3.14;

            temp.updateMatrix();
            instancedMesh.setMatrixAt(i, temp.matrix);
        }

        instancedMesh.instanceMatrix.needsUpdate = true;
    }, [model, count, positions]);

    console.log(instancedMeshRef.current?.children[0]);

    useFrame((_, del) => {
        const mesh = instancedMeshRef.current?.children[0];
        if(!mesh) return;

        var mat = new Matrix4();

        // deez variables are only used to pool values
        var rot = new Quaternion();
        var e_rot = new Euler();
        var pos = new Vector3();
        var scale = new Vector3();

        for(let i=0; i < mesh.count; i++){
            mesh.getMatrixAt(i, mat);
            mat.decompose(pos, rot, scale);
            e_rot.setFromQuaternion(rot);

            e_rot.x += del * rotationSpeed.x;
            e_rot.y += del * rotationSpeed.y;
            e_rot.z += del * rotationSpeed.z;

            rot.setFromEuler(e_rot);
            mat.compose(pos, rot, scale);
            mesh.setMatrixAt(i, mat);
        }
        mesh.instanceMatrix.needsUpdate = true;
    });

    return (
        <group ref={instancedMeshRef} />
    );
}
