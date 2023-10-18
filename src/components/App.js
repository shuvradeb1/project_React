import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import "../Styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Ouiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/Signup" Component={Signup} />
          <Route exact path="/Login" Component={Login} />
          <Route exact path="/Quiz" Component={Quiz} />
          <Route exact path="/Result" Component={Result} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
