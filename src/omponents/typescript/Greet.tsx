// declare types
type user={
    name:string;
    renderTimes:number;
    islogin:boolean
}


const Greet = (props:user) => {
  return (
    <div className="bg-indigo-800 text-white rounded cols flex justify-center items-center">
      <section className="p-4 text-white text-2xl rounded-lg bg-gray-900">
        <p>{props.name}</p>
        <p>{props.renderTimes}</p>
        <p>{props.islogin ===true ? "welcome my page" :"welcome Guest"}</p>
      </section>
    </div>
  )
}

export default Greet
