import { useEffect, useState } from 'react'

const FetchUsers = () => {
    // usestate for users
    const [users, setUsers] =useState<{name:string, id:number,username:string}[]>([]);
    // useEffect for fetch
      useEffect(()=>{
            //  settimeout for 1 second
            setTimeout(()=>{
                fetch("https://jsonplaceholder.typicode.com/users")
                .then((response)=>response.json())
                .then((data)=>setUsers(data))
                .catch((error)=>console.log(error));
            },1000);
      },[]);
  return (
    <div className='m-4 p-4 border'>

        <h2>Fetch Users</h2>
        {users.map((user)=>(
            <div key={user.id}>
                  <table className='table flex justify-between items-center '>
                     <thead className='thead-dark'>
                        <tr className='font-bold '>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                        </tr>
                     </tbody>
                  </table>
            </div>
        ))}
    </div>
  )
};

export default FetchUsers;