import "./App.css";
import LoginView from "./Views/login";
import SignUpView from "./Views/signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      Hello There
      <Routes>
        <Route exact path="/users/login" Component={LoginView}></Route>
        <Route exact path="/users/signup" Component={SignUpView}></Route>
      </Routes>
    </div>
  );
}

export default App;
