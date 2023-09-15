import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Productos from "./components/Productos";
import Detalle from "./components/Detalle";
import useProducto from "./hooks/useProducto";

function App() {

const{productos, favoritos, agregarAFavoritos, eliminarDeFavoritos} = useProducto()

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Productos productos={productos} agregarAFavoritos={agregarAFavoritos} eeliminarDeFavoritos={eliminarDeFavoritos}/>} /> 
        <Route path="/favoritos" element={<Productos productos={favoritos} agregarAFavoritos={agregarAFavoritos} eliminarDeFavoritos={eliminarDeFavoritos}/>} />
        <Route path="/producto/:id" element={<Detalle /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


