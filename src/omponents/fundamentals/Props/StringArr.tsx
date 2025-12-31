type StringArrProps = {
   name:string;
   age:number;
   gender:string;
}
const humans:StringArrProps[]=[
    {name:"surafel mengist",age:28,gender:"Male"},
    {name:" Hasbesha",age:40,gender:"Male"},
    {name:"Nati biruk",age:58,gender:"female"},
   

]
    


const StringArr = () => {
  return (
    <div className="bg-indigo-900 text-white flex  items-center justify-center   mt-4 h-screen  text-2xl">
      {humans.map((list,index)=>{
        return <ul key={index} className="border border-gray-400 rounded p-10 m-4 bg-indigo-700 w-[90%]">
              
                <li>Name:{list.name}</li>
                <li>Name:{list.age}</li>
                <li>Name:{list.gender}</li>
              
        </ul>
      })}
     
    </div>
  )
};

export default StringArr;