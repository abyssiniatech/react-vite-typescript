import { useContext } from "react";
import { ageContext } from './../../../App';


const Name = () => {
    const val=useContext(ageContext)
  return (
    <div>
        <section className="border-gray-400 bg-indigo-600 rounded p-6 border ">
        <h1>My name is surafel mengist and also i am are the best </h1>
       <p>welcome {val}</p>
        </section>
    </div>
  )
};

export default Name;