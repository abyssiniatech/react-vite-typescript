

const Contact = () => {
  return (
    <div className="flex items-center justify-center  flex-col h-screen">
       <form className="bg-white text-gray-800 rounded p-24 border border-gray-400 text-3xl">
         <label htmlFor="name">Name:</label>
         <input className="p-2 w-[70%] border border-gray-50" type="text" id="name" placeholder="Enter name.."/>
         <br />
         <label htmlFor="Email">Email:</label>
         <input type="text" id="Email" placeholder="Enter email.."/>
         <br />
         <label htmlFor="name">Password:</label>
         <input type="text" id="name"/>
         <br />
         <label htmlFor="submit"></label>
         <input  className="bg-gray-400 rounded px-4 py-2" type="button" id="submit"  value="contact me"/>
       </form>
    </div>
  )
};

export default Contact;