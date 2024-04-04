import Profile from "./components/Profile";
import Form from "./components/Form";
import "./App.css"

const App = () => {
  return (
    <div className="container">
      <Profile 
        imageUrl="./Stitch.gif"
        userName="Jessica"
        bio="A passionate software developer from Toronto"  
      />
      <Form />
    </div>
  );
};

export default App;