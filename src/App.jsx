import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Parent from "./components/Parent";
import Character from "./components/Character";
import Place from "./components/Place";
import CharacterPage from "./pages/CharacterPage";
import PlacePage from "./pages/PlacePage";

function App() {
  return (
    <>
      <Router>
        <></>
        <Routes>
          <Route path="/" element={<Parent />} />
          <Route path="/characters" element={<Character />} />
          <Route path="/place" element={<Place />} />
          <Route path="/characters/:characterId" element={<CharacterPage />} />
          <Route path="/places/:placeId" element={<PlacePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
