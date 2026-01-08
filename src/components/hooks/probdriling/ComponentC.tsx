import ComponentD from "./ComponentD";

type props={
    age:number
}
const ComponentC = (props:props) => {
  return (
    <div className="bg-gray-100 border border-gray-400 rounded p-50">
        <p>Component C</p>
        <p>{props.age}</p>
        <ComponentD email="sura@gmail.com" />
       
    </div>
  )
};

export default ComponentC;