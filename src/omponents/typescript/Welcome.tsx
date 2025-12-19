type Props = {
  name:string,
  age: number
}

const Welcome = (props: Props) => {
    // datatypes in typescript
  

  return (
    <div className="bg-teal-500 text-white gap-4 flex p-8 justify-center items-center">
      {props.name}
      {props.age}
    </div>
  )
};

export default Welcome;