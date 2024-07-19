import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Canvas3D({className}){

    return (
        <div className = {className}>
            <Canvas 
                camera = { { fov: 75, near: 0.1, far: 1000, position: [0, 0, 20] } }
            >
                <ambientLight intensity={0.1} />

                <directionalLight color="#fff" position={[0, 0, 5]} />
                <ambientLight color = "#fff" />

                <mesh position = {[8,4,0]} scale={[2,2,2]}>
                    <boxGeometry/>
                    <meshStandardMaterial color="#5fd"/>
                </mesh>
                <mesh position = {[0,-3,0]} scale={[5,5,5]}>
                    <sphereGeometry/>
                    <meshStandardMaterial color="#da5" />
                </mesh>
                
                <OrbitControls 
                    autoRotate={true} enableZoom={false} 
                    maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} 
                    autoRotateSpeed={15} 
                />
                <Stats />

            </Canvas>
        </div>
    )
}
