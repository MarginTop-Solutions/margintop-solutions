import { OrbitControls, Stats, Preload, StatsGl } from "@react-three/drei";
import { Canvas} from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { LayerMaterial, Depth} from 'lamina'
import * as THREE from 'three';

import Model from "./model";
import Clones from "./clones";
import ModelInstances from "./instances";

export default function Canvas3D({ className }) {
    const offset = { x: 0, y: -3, z: 0 };
    const count = 100;

    const offs = Array.from({ length: count }, (_, i) => ({ x: 0, y: 0, z: -i * 3 + 40 }));

    return (
        <div className={className}>
            <Canvas shadows camera={{ position: [0, 0, 50], fov: 50 }} >
                <Suspense fallback={null}>
                    <Bg />
                    <mesh position={[-3, -3, 0]}>
                        <sphereGeometry args={[5, 64, 64]} />
                        <meshPhysicalMaterial transmission={1} thickness={10} roughness={0.1} />
                    </mesh>

                    <Model path="/assets/test_ico.glb" position={{x:6, y:3, z:-10}} scale={{x:4, y:4, z:4}} />
                    <Clones
                        path="/assets/test_ico.glb"
                        count={50}
                        spread={{ x: 80, y: 60, z: 50 }} offset={offset}
                        rotationSpeed={{ x: 0, y: 0, z: 1 }}
                    />
                    <ModelInstances
                        path="/assets/trail.glb"
                        positions={offs}
                        scaleMin={.4} scaleMax={2}
                        rotationSpeed={{ x: 0, y: 0, z: 3 }}
                    />

                    <StatsGl className="stats" showPanel={2} />
                    <Stats className="stats" />

                    <OrbitControls autoRotate={false} autoRotateSpeed={20} />

                    <directionalLight intensity={2} castShadow shadow-mapSize-height={1024} shadow-mapSize-width={1024} />
                    <ambientLight intensity={3} />
                    <Preload all />
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
            <sphereGeometry args={[1, 64, 64]} />
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
