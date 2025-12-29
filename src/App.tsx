import { useState } from "react";
import Sum from "./omponents/fundamentals/Props/Practice";
const App = () => {
  const [count, seCount] = useState<number>(0);
  return (
    <div>
      <Sum a={1} b={2}>
        <p>{count}</p>
         <button onClick={()=>seCount(count+1)} className="btn btn-primary text-2xl p-4 border-0 ">Children</button>
      </Sum>
    </div>
  )
};

export default App;