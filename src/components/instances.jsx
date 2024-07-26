import { useEffect, useRef } from "react";
import * as THREE from 'three';

export default function Instances ({model, positions = [], count}) {
    const _temp = new THREE.Object3D();

    const instanceRef = useRef();

    useEffect( ()=>{
        for (let i=0; i < count; i++){
            _temp.position.set(Math.random(), Math.random(), i);
            //_temp.position.set(positions[i].x, positions[i].y, positions[i].z);
            _temp.updateMatrix();
            instanceRef.current.setMatrixAt(i, _temp.matrix);
        }
        instanceRef.current.instanceMatrix.needsUpdate = true;
    }, []);

    return (
      <instancedMesh ref={instanceRef} count={count} > 
          <primitive 
              object={model.scene} 
              scale={scale} 
          />
      </instancedMesh>
    );
    //  return (
        //      <group ref={meshRef}>
        //          {offs.map((o, i) =>(
            //              <mesh position={o} key={i}> 
            //                  <primitive 
            //                      object={model.scene.clone()} 
            //                      scale={scale + Math.random()*0.1} 
            //                      rotation={[0,0,i*0.5]}
            //                  />
            //              </mesh>
            //          ))}
        //      </group>
        //  )
}


//  return (
//      <instancedMesh ref={meshRef} count={count} instanceMatrix = {instanceMatrix}> 
//          <primitive 
//              object={model.scene} 
//              scale={scale} 
//          />
//      </instancedMesh>
//  )
