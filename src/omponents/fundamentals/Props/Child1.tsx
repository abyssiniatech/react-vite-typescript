type Child1Props = {
  message: React.ComponentType;
  children: React.ReactNode;
};

const Child1 = (props: Child1Props) => {
  return (
    <div>
      <props.message />
      {props.children}
    </div>
  );
};

export default Child1;
