import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EntrancePage from "./pages/EntrancePage/EntrancePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";


 class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<EntrancePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
