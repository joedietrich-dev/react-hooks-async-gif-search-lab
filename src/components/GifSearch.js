import { useState } from "react";

function GifSearch({ onSearchSubmit = (f) => f }) {
  const [term, setTerm] = useState("");
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearchSubmit(term); }}>
      <label htmlFor="search">Search: </label>
      <input
        name="search"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        type="text" />
      <input type="submit" name="submit" id="submit" />
    </form>
  );
}

export default GifSearch;
