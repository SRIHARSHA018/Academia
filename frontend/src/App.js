import "./App.css";
import CoursesView from "./Views/courses";
import HomeView from "./Views/home";
import LoginView from "./Views/login";
import NotFoundView from "./Views/notfound";
import SignUpView from "./Views/signup";
import WelcomeView from "./Views/welcome";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Header from "./Views/header";

function App() {
  useEffect(() => {
    axios.defaults.baseURL =
    "https://cuddly-system-6r7955qwj5724r7q-8002.app.github.dev/api";
  },[]);
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="*" Component={NotFoundView}></Route>
        <Route exact path="/" Component={HomeView}></Route>
        <Route exact path="/users/login" Component={LoginView}></Route>
        <Route exact path="/users/signup" Component={SignUpView}></Route>
        <Route exact path="/welcome" Component={WelcomeView}></Route>
        <Route exact path="/courses" Component={CoursesView}></Route>
      </Routes>
    </div>
  );
}

export default App;
