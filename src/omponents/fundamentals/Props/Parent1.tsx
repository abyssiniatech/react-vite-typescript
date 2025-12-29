import Child1 from "./Child1";

function Hello(){
    return <h1>Hello this is the parent components</h1>
}

const Parent1 = () => {
  return (
    <>
      <div>Parent1</div>
      <Child1 message={Hello} />
    </>
  )
};

export default Parent1;