type Child1Props = {
    message:React.ComponentType;
}

const Child1 = (props: Child1Props) => {
    
  return (
    <div>
       <props.message />
    </div>
  
  )
};

export default Child1;