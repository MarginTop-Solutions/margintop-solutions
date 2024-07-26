import { useGLTF, useFBX } from "@react-three/drei";

export const ModelTypes = {
    gltf : 1,
    glb  : 2,
    fbx  : 3
};


export const getLoader = (type)=>{
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
