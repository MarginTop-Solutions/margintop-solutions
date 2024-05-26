import { useEffect, useState } from "react";


const CursorFollower = ({children}) =>{
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(()=>{

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    },[])
    return(
        <div  className='cursor-follower' style={{ left: `${position.x}px`, top: `${position.y}px` }}>
        </div>
    )
}

export default CursorFollower;