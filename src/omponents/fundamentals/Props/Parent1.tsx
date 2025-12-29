import { useState } from "react";
import Child1 from "./Child1";
import Button from "./Button";

function Hello() {
  return <h1>Hello this is the parent component</h1>;
}

const Parent1 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>Parent1</div>

      <Child1 message={Hello}>
        <section>
          <p>this is the children prop in React + TypeScript</p>

          <Button
            className="btn btn-primary"
            onClick={() => setCounter(counter + 1)}
            Counter={counter}
            setCounter={setCounter}
          >
            Increment {counter}
          </Button>
        </section>
      </Child1>
    </>
  );
};

export default Parent1;
