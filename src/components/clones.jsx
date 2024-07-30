import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react"
import { Vector3 } from "three";
import { getLoader, ModelTypes } from "./utils/loader";

/*
    count should always be set
    - set positions to list of coordinates for each model-clone if you have predefined positions
    - leave positions empty and set spread to some value along with offset to randomly
    place models in different positions
*/

export default function Clones({
    path,
    type = ModelTypes.glb,
    count = 1,
    positions = [],
    spread = {x:1, y:1, z:1}, offset = {x:0, y:0, z:0},
    scaleMin = 1, scaleMax = 1.5,
    rotationSpeed = {x:0, y:0, z:0}
}) {

    const loader = getLoader(type);
    const model = loader(path);

    const meshRef = useRef();
    const clones = useMemo(() => Array.from({ length: count }, _ => model.scene.clone()), [count, model]);

    const clonePoses = useMemo(() => {
        const _pos = [];
        const _count = Math.max(count, positions.length);
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
            _pos.push(_tp);
        }
        return _pos;
    }, [count, positions]);

    useFrame((_, delta) => {
        meshRef.current.children.forEach(mesh => {
            mesh.rotation.x += delta * rotationSpeed.x;
            mesh.rotation.y += delta * rotationSpeed.y;
            mesh.rotation.z += delta * rotationSpeed.z;
        });
    });

    console.log(clonePoses);
    return (
        <group ref={meshRef}>
            {clonePoses.map((pos, i) => (
                <mesh position={pos} key={i}>
                    <primitive
                        object={clones[i]}
                        scale={scaleMin + Math.random() * (scaleMax - scaleMin)}
                        rotation={[0, 0, Math.random()*3.1415]}
                    />
                </mesh>
            ))}
        </group>
    )
}
