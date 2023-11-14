import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import Body from "./../components/Body";
import ContatoScreen from "../screens/ContatoScreen";
import Sobre from "../screens/SobreScreen";
import Dicas from "../screens/DicasScreen";
import Trips from "../screens/TripsScreen";
import ExercicioFetch from "../screens/ExercicioFetch";
import NoticiaSingle from "../screens/NoticiaSingle";

export default function RouterRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/">
          <Route element={<HomeScreen />} path="/" />
          <Route element={<Sobre />} path="/sobre" />
          <Route element={<ContatoScreen />} path="/contato" />
          <Route element={<Dicas />} path="/dicas" />
          <Route element={<Trips />} path="/trips" />
          <Route element={<ExercicioFetch />} path="/exerciciofetch" />
          <Route element={<NoticiaSingle />} path="/vernoticia/:idNoticia" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
