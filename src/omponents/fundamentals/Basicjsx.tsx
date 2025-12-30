import { useState } from "react";

const Basicjsx = () => {
  const [show, setShow] = useState(true);

  const handleText = () => {
    setShow(prev => !prev); 
  };

  return (
    <div className=" w-[600px] m-auto border-2 border-danger flex flex-column p-4 items-center justify-center">
      {show && (
        <>
          <h1 className="border border-2 border-info  p-4 m-2 rounded">Welcome to my website</h1>
          <p className="border border-2 border-black rounded m-2 p-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            quibusdam officia reprehenderit animi voluptates laboriosam rem quia,
            rerum repellendus eveniet, commodi minus sapiente eos aperiam,
            consequatur amet excepturi. Mollitia, nesciunt?
          </p>
        </>
      )}

      <button onClick={handleText} className="bg-indigo-700 text-white font-bold rounded px-4 py-2 text text-3xl mt-2 hover:bg-indigo-400">
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Basicjsx;
