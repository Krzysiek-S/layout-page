import { useState } from "react";
import Home from "./pages/Home/Home.tsx";

import "./App.css";

function App() {
  const [moreTiles, setMoreTiles] = useState(false);
  console.log(moreTiles);

  return (
    <main className="main">
      <Home moreTiles={moreTiles} setMoreTiles={setMoreTiles} />
    </main>
  );
}

export default App;
