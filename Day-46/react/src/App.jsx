import React from "react";
import { useState, useEffect } from "react";
import Card from "./component/Card";
import "./App.css";

const App = () => {
  const [page, setpage] = useState(1);
  const [size, setsize] = useState(20);
  const [isFetched, setisFetched] = useState(false);
  const [images, setimages] = useState([]);
  const [input, setinput] = useState(1);

  const handlePrev = () => {
    if (page < 2) {
      setpage(1);
    } else {
      setpage(page - 1);
    }
  };

  const handleNext = () => {
    setpage(page + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pageNumber = Number(input);

    if (!pageNumber || pageNumber < 1) {
      alert("Enter a valid page number");
      return;
    }

    setpage(pageNumber);
  };

  const fetchImages = () => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${size}`)
      .then((response) => response.json())
      .then((data) => {
        setimages(data), setisFetched(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchImages(page, size);
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div>
      <h1 className="heading">Gallery</h1>

      {isFetched ? (
        <div className="gallery">
          {images.map((image) => (
            <Card key={image.id} img={image} />
          ))}
        </div>
      ) : (
        <h1 className="loading">Loading</h1>
      )}
      {isFetched ? (
        <div className="pagination">
          <button onClick={handlePrev}>Prev</button>
          <p className="currentpage">{page}</p>
          <button onClick={handleNext}>Next</button>
        </div>
      ) : (
        ""
      )}
      {isFetched ? (
        <form className="skiptopage" onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Skip to page"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
