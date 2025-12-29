type Props = {
    a:number;
    b:number;
    children?: React.ReactNode;
}

const Sum = ({a,b,children}: Props) => {
  return (
    <div className="text-center bg-indigo-700 text-3xl text-white font-bold">
        <p>The sum of two number is  = {a + b}</p>
        {children}
        </div>
  )
};

export default Sum;