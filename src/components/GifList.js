import React from "react";

function GifList({ gifs }) {
  const mappedGifs = gifs.map((gif) => (
    <li key={gif.id}>
      <img src={gif.images.original.url} alt="gif" />
    </li>
  ));
  return <ul>{mappedGifs}</ul>;
}

export default GifList;
