type BasicProps = {
   name: string;
   age: number;
   email: string;
  };

   


  const info: BasicProps[] = [
    {name: "Alice",age:30,email:"surafel@gmail.com"},
    {name:"Bob",age:25,email:"Bob@gmail.com"},
    {name:"Charlie",age:35,email:"Charlie@gmail.com"},
    {name:"David",age:28,email:"David@gmail.com"}
]
const BasicProps = () => {
  return (
    <div>
      
        {
            info.map((user,index)=>(
                <div key={index}>
                    <h3>{user.name}</h3>
                    <p>Age: {user.age}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))
        }
    </div>
    )
};

export default BasicProps;