type info={
    name:string,
    age:number,
    isstudent:boolean
}
const students={
    // name:"surafel",
    name:23,
    age:26,
    isstudent:true
}

// eslint-disable-next-line no-empty-pattern
const Variables = ({}:info) => {
  return (
    <div className="bg-blue-600 text-white gap-4 flex p-8 justify-center items-center">
        <p>{`my name is ${students.name}`}</p>
        <p>{`i'm ${students.age} years old`}</p>
        <p>{`${students.isstudent}`}</p>
        </div>
  )
};

export default Variables;