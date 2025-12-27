import React, { useState } from "react";
type FormDataPrps = {
    name: string;
    email: string;
}
const forminput ={
    name: '',
    email: ''
}
const Basic = () => {
const [formData, setFormData] = useState<FormDataPrps>(forminput);
const [age, setAge] = useState<number>(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    })); 
    //  clear form input after submit
    
        
     

  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData.name, formData.email, age);
  };
  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
    };
  return (
    <div className="m-4 p-4 border h-screen">
         <header className="p-4 m-4">
                <h2 className="text-2xl font-bold mb-4">Name: {formData.name}</h2>
                <h2 className="text-2xl font-bold mb-4">Email: {formData.email}</h2>
                <h2 className="text-2xl font-bold mb-4">Age: {age}</h2>
         </header>
          <form onSubmit={handleSubmit} className="bg-indigo-800 text-white font-bold p-4 m-2 rounded shadow-md">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            <br />
             <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" value={age} onChange={handleAge} />
            <button className="bg-white text-indigo-800 font-bold py-2 px-4 rounded hover:bg-gray-200" type="submit">Submit</button>
           
           </form>
    </div>
  )
};

export default Basic;