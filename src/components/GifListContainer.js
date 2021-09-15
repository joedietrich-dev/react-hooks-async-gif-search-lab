import { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=1GSxHzJrvhqYSNyA91jFUoyPmu7vAMAn&rating=pg-13&limit=3`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setGifs(data.data));
  }, []);

  function handleSearchSubmit(term) {
    const searchUrl = `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=1GSxHzJrvhqYSNyA91jFUoyPmu7vAMAn&rating=pg-13&limit=3`;
    fetch(searchUrl)
      .then(res => res.json())
      .then((data) => setGifs(data.data))
  }

  return (
    <div>
      <GifSearch onSearchSubmit={handleSearchSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
