import Header from "./components/Common/Header";
import MainComponent from "./components/LandingPage/MainComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import DashBoardPage from "./pages/DashBoard";
import CoinPage from "./pages/Coin";
import ComparePage from "./pages/ComparePage";

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/dashboard" element={<DashBoardPage/>}/>
         <Route path="/compare" element={<ComparePage/>}/>
         <Route path="/coin/:id" element={<CoinPage/>}/>
     </Routes>

    </BrowserRouter>
    
    </>
  );
}

export default App;
