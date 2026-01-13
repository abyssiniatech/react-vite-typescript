import ComponentB from "./ComponentB";


const ComponentA = () => {
  return (
    <div className="bg-gray-100 border border-gray-400 rounded p-50">
        <p>Component A</p>
        <ComponentB name="surafel" />
        

    </div>
  )
};

export default ComponentA;