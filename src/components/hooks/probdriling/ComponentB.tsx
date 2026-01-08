import ComponentC from "./ComponentC";

type propA={
    name:string
}
const ComponentB = (props:propA) => {
  return (
    <div className="bg-gray-100 border border-gray-400 rounded p-50">
        <p>Component B</p>
        <p>{props.name}</p>
        <ComponentC age={26} />

    </div>
  )
};

export default ComponentB;