type ButtonProps = {
    value: string;
    setValue: (newValue: string) => void;
}

const Button = (props: ButtonProps) => {
    //  render the input value in the console window
    const handleclick = () => {
        const value = props.value;
        console.log(value);
        props.setValue("");
    }

  return (
    <div className="bg-gray-100 mt-10 p-5  ">
        <h2 className="text-center">Welcome to my channel</h2>
        <p className="text-green-600 font-bold text-center">{props.value}</p>
        <input className="border border-gray-300 rounded-md p-4 w-full" type="text" onChange={(e) => props.setValue(e.target.value)}  />
      {/* click button render in the console window */}
      <button className="border px-4 py-2 text-white font-semibold mt-4 rounded bg-pink-700 m-auto flex justify-center items-center" onClick={handleclick}>Submit</button>
    </div>
  )
};

export default Button;
