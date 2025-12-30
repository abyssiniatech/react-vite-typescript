import { useState } from "react";



const Show = () => {
    const [show,isShow] = useState(false)
    const handleshow =() =>{
      isShow(show =>!show)
    }
  return (
    <div className="bg-indigo-800 text-white h-screen flex justify-content items-center">
          <section className="bg-indigo-600 text-white w-50 border border-gray-400 flex justify-center items-center p-4 m-auto rounded">
            
<button className="btn btn-primary m-4" onClick={handleshow}>{show?"Hide" : "Hide"}</button>

            {show &&(
              <main>
                <h1>WElcome to me </h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis magnam atque perferendis facilis modi, temporibus dolorem possimus tempore quas itaque quidem consequuntur in, harum voluptatem labore earum at rerum illum?</p>
              </main>
            )}

          </section>
    </div>
  )
};

export default Show;