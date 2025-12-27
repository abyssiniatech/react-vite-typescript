import React, { useState } from "react";
type info = {
  name: string;
  email: string;
};
const initialState: info = {
  name: "",
  email: "",
};
const App = () => {
  // define component logic here if needed
  const [name, setName] = useState<info>(initialState);
  const [email, setEmail] = useState<info>(initialState);

  // form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);

    //  validation can be added here
    if (name.name === "" || email.email === "") {
      alert("Please fill in all fields.");
       throw new Error("Form fields cannot be empty");
    }
    if (!/\S+@\S+\.\S+/.test(email.email)) {
      alert("Please enter a valid email address.");
    }
  
   else{
    alert("Form submitted successfully!");
   }
    // reset form fields
    setName(initialState);
  };
  // input change handlers
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({ ...name, name: e.target.value });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({ ...email, email: e.target.value });
  };

  return (
    <div className="h-screen bg-indigo-800 text-white flex justify-center hover:bg-indigo-900 items-center border border-gray-100 shadow-sm">
      <section className="text-center border p-6 rounded-lg bg-indigo-700 shadow-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to Login Form</h1>
        <p className="text-lg">
          This is a simple React application using TypeScript and Tailwind CSS.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4 bg-gray-200 p-4 rounded-lg text-gray-900">
          <label className="font-bold italic text-2xl " htmlFor="name">
            Name : {name.name.toUpperCase()}
          </label>
          <input
            onChange={handleName}
            className="border  text-gray-800 border-gray-400 p-2 w-full bg-white rounded-lg hover:bg-gray-100"
            type="text"
            id="name"
            name="name"
          />
          <br />
          <label className="font-bold italic text-2xl " htmlFor="email">
            Email : {email.email.toLowerCase()}
          </label>
          <input
            onChange={handleEmail}
            className="border  text-gray-800 border-gray-400 p-2 w-full bg-white rounded-lg hover:bg-gray-100"
            type="email"
            id="email"
            name="email"
          />
          <br />
          <input
            type="submit"
            value="Submit"
            className="btn btn-success border-0 mt-4 w-full"
          />
        </form>
      </section>
    </div>
  );
};

export default App;
