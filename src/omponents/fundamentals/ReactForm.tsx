

const ReactForm = () => {
const handleclick =()=>{
    alert("form submitted")
    console.log("form submitted")
}
  
  return (
    <div className="bg-gray-100 border border-gray-400 h-screen flex flex-col justify-center items-center ">
       <form className="border border-gray-400 p-4 rounded bg-white shadow-md">
        <fieldset className="font-bold text-xl border border-gray-400 p-4 mb-4">
            <legend className="text-center p-2 font-bold font-serif text-3xl font-italic">Personal Information</legend>
            <label className="font-mono text-2xl" htmlFor="name">Name</label>
            <input className="w-full p-2 border border-gray-400" type="text" id="name" name="name" />
            <br />
            <label className="font-mono text-2xl" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-400" type="email" id="email" name="email" />
            <br />
         
            <label className="text-2xl font-mono  shadow-md" htmlFor="gender">Gender:</label>
            <input className="p-2 m-2" type="radio" id="male" name="gender" value="male" />
            <label className="text-2xl font-mono  shadow-md" htmlFor="male">Male</label>
            <input className="p-2 m-2" type="radio" id="female" name="gender" value="female" />
            <label className="text-2xl font-mono  shadow-md" htmlFor="female">Female</label>
            <br />
                    {/* Date & Time Inputs */}

           <div>
            <label className="text-2xl font-mono  shadow-md" htmlFor="birthday">Birthday:</label>
            <input className="p-2 m-2" type="date" id="birthday" name="birthday" />
            </div>
            {/* Checkbox */}
             <div>
                <label className="text-2xl font-mono  shadow-md" htmlFor="subscribe">Subscribe to Newsletter:</label>
                 <input className="p-2 m-2" type="checkbox" id="subscribe" name="subscribe" />
                  <br />
                 
             </div>


            <label className="text-2xl font-mono  shadow-md" htmlFor="country">Country:</label>
            <select id="country" name="country" className="p-2 mt-2">
              <option className="p-2" value="usa">USA</option>
              <option className="p-2" value="canada">Canada</option>
              <option className="p-2" value="uk">UK</option>
            </select>
            <br />
   


            {/* text area */}
            <label htmlFor="message" className="m-auto text">Message:</label>
            <textarea id="message" placeholder="enter your comment" name="message" className=" p-12"></textarea>
            <br />
            <button onClick={handleclick} type="submit" className="bg-blue-500 w-full flex justify-center items-center  text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">Submit</button>
           </fieldset>
       </form>
    </div>
  )
};

export default ReactForm;