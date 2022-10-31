import axios from "axios";
import "./Character.css";
import React, { useEffect, useState } from "react";

const Characters = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  let url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`;

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    setPage(1);
  };

  const nextPageHandler = () => {
    setPage(page + 1);
  };

  const previousPageHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(42);
    }
  };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data.results))
      .catch((error) => console.log(error));
  }, [url]);

  console.log(data);

  return (
    <div>
      <div className="search">
        <input onChange={nameChangeHandler} type="text" placeholder="Search" />
      </div>

      {data && (
        <div className="flex">
          {data.map((character, idx) => {
            return (
              <div className="characterHolder" key={idx}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name} />
              </div>
            );
          })}
        </div>
      )}

      <div className="flexBtn">
        <button onClick={previousPageHandler} className="btnPrev">
          Previous Page
        </button>
        <button onClick={nextPageHandler} className="btnNext">
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Characters;
