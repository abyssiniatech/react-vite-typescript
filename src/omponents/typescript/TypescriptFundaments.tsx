
type SquareProps = {
  num: number;
};

const Square = ({ num }: SquareProps) => {
  const obj:{name:string,model:string,year:number}={
    name:"Toyota",
    model:"V8",
    year:2015,

  }
  console.log(obj)
  console.log(num * num)
  return (
     <div>{num * num}</div>
  )
};

export default Square;
