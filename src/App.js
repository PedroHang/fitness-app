import React from "react";
import Home from "./Home.js";
import GlobalStyles from "./styles/GlobalStyles.js"
import Login from "./Login.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  )
}

const LoginPage = () => {
  return (
    <>
      <GlobalStyles />
      <Login />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/fitness-app" exact element={<HomePage />} />
        <Route path="/fitness-app/login" exact element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
