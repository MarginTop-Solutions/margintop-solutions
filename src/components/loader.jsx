 import { Html, useProgress } from "@react-three/drei"; 

export default function Loader(){
    const {progress} = useProgress();

    return (
        <Html>
            <span className="canvas-load"></span>
            <p className="text-xl text-black font-bold">Loading {progress.toFixed(2)}%</p>
        </Html>
    )
}
