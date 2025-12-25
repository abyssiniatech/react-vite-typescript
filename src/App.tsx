import Prop from "./omponents/fundamentals/Prop";
import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
       
      <Prop count={count} setCount={setCount} />
    </div>
  )
};

export default App;