import { useEffect, useState } from "react";

const Lab2 = () => {
  // Store the window width
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [hieght,setHeight] =useState(window.innerHeight)
  useEffect(() => {
    // Function to handle resize
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency → run only once

  return (
    <div className="h-screen flex justify-center  items-center flex-col">
      <p className="text-2xl font-bold text-indigo-700">
             <p className="bg-pink-700 rounded text-white p-4 mt-4">Window width: {width}px</p>
             <p className="bg-pink-800 text-white rounded p-4 m-2">Window Hight: {hieght}px</p>
        
        
      </p>
    </div>
  );
};

export default Lab2;
