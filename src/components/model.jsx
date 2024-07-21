import { useGLTF, useFBX } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

export const ModelTypes = {
    gltf : 1,
    glb  : 2,
    fbx  : 3
};

export default function Model({path, position=[0,0,0], scale=1, type = ModelTypes.gltf}){
    const getLoader = ()=>{
        switch(type){
            case ModelTypes.gltf:
                return useGLTF;
            case ModelTypes.glb:
                return useGLTF;
            case ModelTypes.fbx:
                return useFBX;
            default:
                return useGLTF;
        }
    }

    //const loader = getLoader();
    // const model = loader(path);
    const model = useLoader(GLTFLoader, path);

    return (
        <mesh>
            <primitive object={model.scene} scale={scale} position={position} />
        </mesh>
    )
}
