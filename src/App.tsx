import Greet from "./omponents/typescript/Greet";
const App = () => {
  return (
    <div>
        <Greet 
        name="surafel mengist"
        renderTimes={12}
        islogin = {false}
        />
    </div>
  );
};

export default App;
