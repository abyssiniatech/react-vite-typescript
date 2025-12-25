type Props = {
  name:string;
  age:number;
  isStudent:boolean;
  children?:React.ReactNode;
}

const Props = ({name, age, isStudent, children}: Props) => {
  return (
    <div>
       <h2>Props components</h2>
        <p>{name}, {age}, {isStudent}</p>
        {children}
    </div>
  )
};

export default Props;