import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [animeList, setAnimeList] = useState([])
  const [topAnime, setTopAnime] = useState([])
  const [search, setSearch] = ("")

  const getTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => res.json())

    setTopAnime(temp.top.slice(0, 5))
  }

  useEffect(() => {
      getTopAnime()

  }, [])


  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime}/>
        <Main />
      </div>


    </div>
  );
}

export default App;
