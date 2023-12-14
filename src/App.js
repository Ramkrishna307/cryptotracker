import Header from "./components/Common/Header";
import MainComponent from "./components/LandingPage/MainComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import DashBoardPage from "./pages/DashBoard";

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/dashboard" element={<DashBoardPage/>}/>
     </Routes>

    </BrowserRouter>
    
    </>
  );
}

export default App;
