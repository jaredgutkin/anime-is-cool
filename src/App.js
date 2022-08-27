import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [animeList, setAnimeList] = useState([])
  const [topAnime, setTopAnime] = useState([])
  const [search, setSearch] = ("")
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar />
      </div>


    </div>
  );
}

export default App;
