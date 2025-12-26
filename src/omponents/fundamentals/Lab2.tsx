

const Lab2 = () => {
    const Frainds=["Surafel","Abel", "Nahom","yared","Aster"]
  return (
    <div>
          <h1>List of frainds</h1>
          <ul>
            {Frainds.map((list,index)=>{
                 return <li key={index} className="border-b-stone-500 ">{list}</li>   
            })}
          </ul>
    </div>
  )
};

export default Lab2;