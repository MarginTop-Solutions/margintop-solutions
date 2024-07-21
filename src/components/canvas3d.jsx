import { OrbitControls, Stats, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import Loader from "./loader";
import Model from "./model";

export default function Canvas3D({className}){

    return (
        <div className = {className}>
            <Canvas 
                camera = { { fov: 75, near: 0.1, far: 1000, position: [0, 0, 20] } }
            >
                <ambientLight intensity={0.1} />

                <directionalLight color="#ffffff" position={[0, 0, 5]} />
                <ambientLight color = "#ffffff" />
                <hemisphereLight intensity={7} position={[5,0,2]} rotateY={2} color="#f00" />

                <mesh position = {[12,-4,0]} scale={[2,2,2]}>
                    <boxGeometry/>
                    <meshStandardMaterial color="#a44"/>
                </mesh>
                <mesh position = {[-12,-3,5]} scale={4}>
                    <sphereGeometry/>
                    <meshStandardMaterial color="#0f0" />
                </mesh>
                
                <Suspense fallback={<Loader />}>
                    <Model path="/assets/test_ico.gltf" position={[6,4,0]} scale={3}/>
                    <Model path="/assets/test_ico.glb" position={[-6,0,0]} scale={3}/>

                    <OrbitControls 
                        autoRotate={true} enableZoom={false} 
                        maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} 
                    />
                    <Stats />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}
