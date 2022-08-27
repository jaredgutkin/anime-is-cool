import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [animeList, setAnimeList] = useState([])
  const [topAnime, setTopAnime] = useState([])
  const [search, setSearch] = ("")

  const getTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
      .then(res => res.json())

    setTopAnime(temp.top.slice(0, 2))
  }

  useEffect(() => {
      getTopAnime()

  }, [])

  console.log(topAnime)
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar />
        <Main />
      </div>


    </div>
  );
}

export default App;
