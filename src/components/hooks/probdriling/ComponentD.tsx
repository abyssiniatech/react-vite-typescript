type com={
    email:string
}

const ComponentD = (props:com) => {
  return (
    <div className="bg-gray-100 border border-gray-400 rounded p-50">
        <p>Component D</p>
        <p>{props.email}</p>

    </div>
   
  )
};

export default ComponentD;