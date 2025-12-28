
 const  Users=[
    {name:"surafel",email:"sura@gmail.com",age:28},
    {name:"Abel",email:"Abel@gmail.com",age:29},
    {name:"Aster",email:"aster@gmail.com",age:28},
    {name:"Yared",email:"yared@gmail.com",age:28},
    {name:"Esmael",email:"Esmael@gmail.com",age:28},
    {name:"Biruk",email:"Biruk@gmail.com",age:28}
]
const UsersData = () => {
  return (
    <div>
         {Users.map((user:{name:string,email:string,age:number},index:number)=>{
            return <div key={index}>{user.name}</div>
         })}
    </div>
  ) 
};

export default UsersData;