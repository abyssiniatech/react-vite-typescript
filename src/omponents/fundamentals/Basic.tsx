import { useState } from "react";


const Basic = () => {
    const [show,isShow]=useState(true);
    const [hour,sethour]=useState(true)
    const handleshow =()=>{
        isShow(show => !show)
    }


    // generate hours
             const hours= new Date().getHours();
            const minutes= new Date().getMinutes()
            const seconds=new Date().getSeconds()
            
            const result=`${hours} : ${minutes}: ${seconds}`
            // console.log(result)

      const  GenerateHours =() =>{
        setInterval(()=>{
        //    return sethour(result => !result);
           
        },1000)

        

      }







  return (
    <div className="bg-indigo-800 text-white flex flex-col items-center justify-center h-screen border border-gray-400 shadow-lg w-125 m-auto p-8 rounded-2xl">
        {show && (
     <section className="w-100 bg-gray-800 text-white rounded-2xl p-4">
        <h1 className="text-center">welcome my channel</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officiis quod saepe. Temporibus dicta expedita impedit harum, nesciunt cum qui molestias dignissimos id ipsum eum veniam vero nam repellendus amet!</p>
       
     </section>
      )}
        <button onClick={handleshow} className="btn btn-success hover:bg-green-500">{show ? "Hide" : "show"}</button>
        <button onClick={GenerateHours} className="bg-blue-900 hover:bg-blue-500 px-4 py-2 rounded text-2xl active:bg-blue-300">Show hour {hour}</button>
    </div>
  )
};

export default Basic;