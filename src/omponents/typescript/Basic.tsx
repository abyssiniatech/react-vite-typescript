type info ={
    name:string,
    age:number;
    isRegister:boolean
}

interface human extends info{
    email:string,
    phone:number
}
const Basic = ({name,age,isRegister,email,phone} :human) => {
   return(
       <div>
          <h1>{name}</h1>
          <h1>{age}</h1>
          <h1>{name}</h1>
          <h1>{isRegister}</h1>
          <h1>{email}</h1>
          <h1>{phone}</h1>
       </div>
   )
};

export default Basic;