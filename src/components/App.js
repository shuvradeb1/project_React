import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "../Styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Ouiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import {AuthProvider}from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";


function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Routes>
        <Route exact path="/" Component={Home} />
          <Route exact path="/Signup" Component={Signup} />
          <Route exact path="/Login" Component={Login} />

          <Route element={<PrivateRoute />}>
          <Route exact path="/Quiz" Component={Quiz} />
          <Route exact path="/Result" Component={Result} />
          </Route>

        </Routes>
      </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;











