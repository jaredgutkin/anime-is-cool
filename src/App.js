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

  const handleSearch = e => {
    e.preventDefault();

    fetchAnime(search)
  }

  const fetchAnime = async (query) => {
      const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
        .then(res => res.json())

      setAnimeList(temp.results)
  }


  useEffect(() => {
      getTopAnime()

  }, [])


  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime}/>
        <Main 
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
          />
      </div>


    </div>
  );
}

export default App;
