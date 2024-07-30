import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { getLoader, ModelTypes } from "./utils/loader";


export default function Model({ 
    path, 
    type = ModelTypes.glb, 
    position = {x:0,y:0,z:0}, 
    scale={x:1, y:1, z:1}, 
    rotation={x:0, y:0, z:0},
    rotationSpeed = {x:0, y:0, z:1} 
}) {
    // type conversion
    const _position = [position.x, position.y, position.z];
    const _scale = [scale.x, scale.y, scale.z];
    const _rotation = [rotation.x, rotation.y, rotation.z];

    const loader = getLoader(type);
    const model = loader(path);

    const meshRef = useRef();

    useFrame((_, delta) => {
        meshRef.current.rotation.x += delta * rotationSpeed.x;
        meshRef.current.rotation.y += delta * rotationSpeed.y;
        meshRef.current.rotation.z += delta * rotationSpeed.z;
    });

    return (
        <mesh ref={meshRef} position={_position} >
            <primitive
                object={model.scene.clone()}
                scale={_scale}
                rotation={_rotation}
            />
        </mesh>
    )
}

