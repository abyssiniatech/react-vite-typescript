
type EventProps = {
   isSubmitted: boolean;
   setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

// all logics react with typescript
const Event = ({ isSubmitted, setIsSubmitted }: EventProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(false);
        console.log(isSubmitted)
    };

    // rendering input values in the p tag 

    // JSX with Tailwind CSS classes
  return (
    <div className="mt-4 bg-gray-100 ">
        {/* render input values */}
        <p>{isSubmitted ? "Form submitted!" : "Form not submitted yet."}</p>
      <h2 className="text-2xl font-bold mb-2">Event Handling Form</h2>
      <p className="text-gray-600">Please fill in your details below:</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label htmlFor="name" className="m-2">Name:</label> <br />
        <input onChange={() => setIsSubmitted(true)} type="text" id="name" placeholder="Enter your name" className="m-2 p-2 border rounded" />
        <br />
        <label htmlFor="email" className="m-2">Email:</label>
        <br />
        <input onChange={() => setIsSubmitted(true)} type="email" id="email" placeholder="Enter your email" className="m-2 p-2 border rounded" />
        <br />
        <button onClick={() => setIsSubmitted(true)} className="bg-blue-700 text-white rounded mx-auto px-4 py-2 flex items-center justify-center" type="submit">Submit</button>
      </form>
      {isSubmitted && <p className="text-green-600 mt-4">Form has been submitted!</p>}
    </div>
  )
};

export default Event;