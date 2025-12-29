type Props = {
  name:string,
  age:number,
  isStudent:boolean
}
const info: Props = {
  name: "John Doe",
  age: 25,
  isStudent: true
}
const App = (info: Props) => {
  return (
    <div className=" p-4 bg-indigo-900 text-white h-screen flex justify-center ">
      <main className="  flex justify-center flex-col p-4 items-center rounded-md border border-gray-400 items-center bg-indigo-600">
        <h2 className="text-3xl font-bold mb-4">Welcome to the App Component</h2>
      <h1>{info.name}</h1>
      <p>Age: {info.age}</p>
      <p>Is Student: {info.isStudent ? "Yes" : <p className="text-red-700">No</p>}</p>
            </main>
    </div>
    
  )
};

export default App;