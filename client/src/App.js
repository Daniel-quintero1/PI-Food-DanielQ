import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Page from "./Componentes/Page";
import Landing from "./Componentes/LandingPage";
import Home from "./Componentes/Home";
import DetailRecipe from "./Componentes/DetailRecipe";
import Form from "./Componentes/Form";
//aca dentro de App declaro todas mis rutas hacindole el llamado de mis component
function App() {

  const location = useLocation()
  return (
    <div className="App"> 
      {location.pathname !== "/" && <Page />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />}/>
        <Route path="/detail/:id" element={<DetailRecipe />}/>
      </Routes>
    </div>
  );
}

export default App;