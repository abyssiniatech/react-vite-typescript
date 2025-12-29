import Child1 from "./Child1";
function Hello(){
    return <h1>Hello World This is the best</h1>
}

const Parent1 = () => {
  return (
    <section className="bg-indigo-800 text-white flex items-center justify-center border border-white h-screen">
      <div>This is parent 1</div>
      <Child1 component={Hello} />
    </section>
  )
};

export default Parent1;