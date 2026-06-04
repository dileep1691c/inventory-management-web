import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import "./index.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
