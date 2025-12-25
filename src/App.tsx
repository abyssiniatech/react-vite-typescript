import Event from "./omponents/Event";
import { useState } from "react";

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(true);
  return (
    <div>
      <Event isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
    </div>
  )
};

export default App;