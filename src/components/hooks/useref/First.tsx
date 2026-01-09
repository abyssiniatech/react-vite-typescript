import { useRef } from "react";

const First = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <form className="flex gap-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter name"
          className="border px-4 py-2 rounded"
        />
        <button
          type="button"
          onClick={handleFocus}
          className="bg-indigo-700 text-white px-4 py-2 rounded"
        >
          Focus
        </button>
      </form>
    </div>
  );
};

export default First;
