import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react"

export default function Clones({ model, scaleMin=1, scaleMax=2, count=-1, positions = [], spread = [1,1,1], rotationSpeed = [0,.2,1]}) {

    const meshRef = useRef();

    const _pos = [];
    useEffect(() => {
        const _count = Math.max(count, positions.length);
        for(let i=0; i<_count; i++){
            if(i<positions.length) _pos.push(positions[i]);
            else _pos.push([Math.random()*spread[0], Math.random()*spread[1], Math.random()*spread[2]])
        }
    }, [count, positions]);

    useFrame((_, delta) => {
        meshRef.current.children.forEach(mesh => {
            mesh.rotation.x += delta * rotationSpeed[0];
            mesh.rotation.y += delta * rotationSpeed[1];
            mesh.rotation.z += delta * rotationSpeed[2];
        });
    });

    const offs = Array.from({length:count}, (_, i)=>[0,0,-1.2*i]);

    return (
        <group ref={meshRef}>
            {offs.map((pos, i) => (
                <mesh position={pos} key={i}>
                    <primitive
                        object={model.scene.clone()}
                        scale={scaleMin + Math.random() * (scaleMax-scaleMin)}
                        rotation={[0, 0, i * 0.5]}
                    />
                </mesh>
            ))}
        </group>
    )
}
