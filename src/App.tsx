import Prop from "./omponents/fundamentals/Prop"
const App = () => {
  return (
    <div>
        <Prop name="John Doe" age={30} isStudent={false} />
        <Prop name="John Doe" age={30} isStudent={false}>
          <div>Welcome to my channel</div>
          <p>these is the child props</p>
        </Prop>
      
    </div>
  )
};

export default App;