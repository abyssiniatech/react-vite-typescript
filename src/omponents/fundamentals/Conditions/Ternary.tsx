

const Ternary = () => {
//   const hours =new Date().getHours();
  const hours=10
  const minutes =new Date().getMinutes();
  const seconds = new Date().getSeconds()


    if(hours>0 && hours<12){
        return <h1 className="bg-white text-red-800 p-4 border  rounded-mb shadow-2xl ">Good Morning : {hours} :{minutes}: {seconds}</h1>
    }
    else if(hours>=12 && hours<18){
        return <h1 style={{color:'yellow'}} className="bg-teal-600 text-white p-4 border  rounded-mb shadow-2xl">Good Afternoon : {hours} :{minutes}: {seconds}</h1>
    }
    else{
        return <h1 className="bg-black p-4 border  rounded-mb shadow-2xl text-amber-700">Good Night : {hours} :{minutes}: {seconds}</h1>
    } 

};

export default Ternary;