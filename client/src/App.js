import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Componentes/Page";
import Landing from "./Componentes/LandingPage";
import Home from "./Componentes/Home";
import DetailRecipe from "./Componentes/DetailRecipe";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/detail/:id" element={<DetailRecipe />}/>
      </Routes>
    </div>
  );
}

export default App;