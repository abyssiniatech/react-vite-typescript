import Button from "./omponents/fundamentals/Button";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Button value={value} setValue={setValue} />
    </div>
  )
};

export default App;