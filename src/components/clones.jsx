import { useFrame } from "@react-three/fiber";
import {useMemo, useRef } from "react"
import { Vector3 } from "three";

export default function Clones({ model, scaleMin=0.1, scaleMax=1, count=-1, positions = [], spread = [1,1,1], rotationSpeed = [0,0,0]}) {

    const meshRef = useRef();
    const clones = useMemo(() => Array.from({length:count}, _=>model.scene.clone()), [count, model]);

    const clonePoses = useMemo(() =>{
        const _pos = [];
        const _count = Math.max(count, positions.length);
        var _tp;
        for(let i=0; i<_count; i++){
            if(i<positions.length) _tp = new Vector3(positions[i][0],positions[i][1],positions[i][2]);
            else _tp = new Vector3(Math.random()*spread[0], Math.random()*spread[1], Math.random()*spread[2]);
            _pos.push(_tp);
        }
        return _pos;
    }, [count, positions]);

    useFrame((_, delta) => {
        meshRef.current.children.forEach(mesh => {
            mesh.rotation.x += delta * rotationSpeed[0];
            mesh.rotation.y += delta * rotationSpeed[1];
            mesh.rotation.z += delta * rotationSpeed[2];
        });
    });

    console.log(clonePoses);
    return (
        <group ref={meshRef}>
            {clonePoses.map((pos, i) => (
                <mesh position={pos} key={i}>
                    <primitive
                        object={clones[i]}
                        scale={scaleMin + Math.random() * (scaleMax-scaleMin)}
                        rotation={[0, 0, i * 0.5]}
                    />
                </mesh>
            ))}
        </group>
    )
}
