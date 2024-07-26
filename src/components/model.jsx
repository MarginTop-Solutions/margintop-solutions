import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


export default function Model({ model, position = [0,0,0], scale=[1,1,1], rotation=[0,0,0], rotationSpeed = [0, 0, .1] }) {

    const meshRef = useRef();

    useFrame((_, delta) => {
        meshRef.current.rotation.x += delta * rotationSpeed[0];
        meshRef.current.rotation.y += delta * rotationSpeed[1];
        meshRef.current.rotation.z += delta * 0.1;
    });

    return (
        <mesh ref={meshRef} position={position} >
            <primitive
                object={model.scene.clone()}
                scale={scale}
                rotation={rotation}
            />
        </mesh>
    )
}

