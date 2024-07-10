import { useEffect, useState } from "react";

const CursorFollower = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mouseConnected, setMouseConnected] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const detectMouse = () => {
      if (navigator.maxTouchPoints === 0) {
        // No touch points means a mouse is likely present
        setMouseConnected(true);
      } else {
        setMouseConnected(false);
      }
    };

    detectMouse();
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!mouseConnected) {
    return null;
  }

  return (
    <div className='cursor-follower' style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      
    </div>
  );
};

export default CursorFollower;
