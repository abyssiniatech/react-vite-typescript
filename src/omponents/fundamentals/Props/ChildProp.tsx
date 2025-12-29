//   set types
type ChildProps = {
  Component: React.ComponentType;
};


function Child(props: ChildProps) {
  const MyComponent = props.Component;

  return (
    <div>
      <h3>Child Component about js</h3>
      <MyComponent />
    </div>
  );
}
export default Child;