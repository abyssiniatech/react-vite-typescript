type Child1Props = {
    component:React.ComponentType;
}

const Child1 = ({component}: Child1Props) => {
   const Component = component;
  return (
    <div>
      <h3>Child Component about js</h3>
      <Component />
    </div>
  )
};

export default Child1;