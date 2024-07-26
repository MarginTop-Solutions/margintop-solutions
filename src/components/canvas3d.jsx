import { OrbitControls, Stats, Preload, useGLTF, Stage, StatsGl } from "@react-three/drei";
import { Canvas, useFrame} from "@react-three/fiber";
import { Suspense, useEffect, useState, useRef } from "react";
import { DebugLayerMaterial, LayerMaterial, Depth, Color, Fresnel, Noise, Normal } from 'lamina'
import * as THREE from 'three';

import Model from "./model";
import { getLoader, ModelTypes } from "./utils/loader";
import Clones from "./clones";

export default function Canvas3D({className}){
    const offset = [0,-.3,0];

    const loader = getLoader(ModelTypes.glb);
    const model = loader("/assets/trail.glb");


    return (
        <div className = {className}>
        <Canvas shadows camera={{ position: [0, 0, 2], fov: 50 }} >
        <Suspense fallback={null}>
            <Bg />
            <mesh position={offset}>
                <sphereGeometry args={[0.2, 64, 64]} />
                <meshPhysicalMaterial transmission={1} thickness={10} roughness={0.1} />
            </mesh>
            
            <Model model = {model} scale={0.05} />
            <Clones model={model} scaleMin={0.1} scaleMax={1} count={10}/>
            
            <StatsGl className="stats" showPanel={2}/>
            <Stats />
            <OrbitControls autoRotate={false} autoRotateSpeed={30}/>
            <directionalLight intensity={2} castShadow shadow-mapSize-height={1024} shadow-mapSize-width={1024} />
            <ambientLight intensity={1} />
        </Suspense>
        </Canvas>
        </div>
    )
}

function Bg() {
  const mesh = useRef()
  //useFrame((state, delta) => {
  //  mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += delta
  //})
  return (
    <mesh ref={mesh} scale={100}>
      <sphereGeometry args={[1, 64, 64]}/>
      <LayerMaterial color="#44faea" attach="material" side={THREE.BackSide}>
        <Depth
          alpha={0.3}
          mode="multiply"
          near={0}
          far={300}
          origin={[100, 100, 100]}
        />
      </LayerMaterial>
    </mesh>
  )
}

//export default 
//function _Canvas3D({className}){
//    const offset = [14.5,-4.3, 0];
//
//    return (
//        <div className = {className}>
//            <Canvas 
//                camera = { { fov: 75, near: 0.1, far: 1000, position: [0, 0, 20] } }
//            >
//                <ambientLight intensity={0.1} />
//
//                <directionalLight color="#ffffff" position={[0, 0, 5]} />
//                <ambientLight color = "#ffffff" />
//                <hemisphereLight intensity={7} position={[5,0,2]} rotateY={2} color="#f00" />
//
//                {/*<mesh position = {[12,-4,0]} scale={[2,2,2]}>
//                    <boxGeometry/>
//                    <meshStandardMaterial color="#a44"/>
//                </mesh>
//                <mesh position = {[-12,-3,5]} scale={4}>
//                    <sphereGeometry/>
//                    <meshStandardMaterial color="#0f0" />
//                </mesh>*/}
//                
//                <Suspense fallback={<Loader />}>
//                    {/*<Model path="/assets/test_ico.gltf" position={[6,4,0]} scale={3}/>
//                    <Model path="/assets/test_ico.glb" position={[-6,0,0]} scale={3}/> */}
//                    
//                    <Model path="/assets/trail.glb" position = {offset} count = {10} scale={1}/>
//
//                    <OrbitControls 
//                        autoRotate={false} enableZoom={false} 
//                        maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} 
//                    />
//                    <Stats />
//                </Suspense>
//                <Preload all />
//            </Canvas>
//        </div>
//    )
//}
