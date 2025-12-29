import Child from "./ChildProp";
function Message() {
  return <h2>Hello from Parent</h2>;
}

function Parent() {
  return <Child Component={Message} />;
}
export default Parent;