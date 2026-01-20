import React from "react";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {

  let apikey = "YOUR_API_KEY";
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState("top");
  const [nextPage, setNextPage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleFetchData = async () => {
    let url = `https://newsdata.io/api/1/latest?apikey=${apikey}&country=in&language=en`;
    if (searchQuery.trim() !== "") {
      url += `&q=${searchQuery}`;
    } else {
      url += `&category=${category}`;
    }

    if (nextPage) url += `&page=${nextPage}`;

     try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "error") return;

      if (!publishedDate && data.results?.length > 0) {
        const formattedDate = new Date(data.results[0].pubDate)
          .toLocaleString("en-IN", {
            weekday: "long",
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
          .replace(",", "");

        setPublishedDate(formattedDate);
      }

      setNewsData(prev => [...prev, ...data.results]);
      setNextPage(data.nextPage || null);
    } catch (err) {
      console.error("Failed to fetch news", err);
    }
  };

  useEffect(() => {
    setNewsData([]);
    setNextPage(null);

    const timer = setTimeout(() => {
      handleFetchData();
    }, 500); 

    return () => clearTimeout(timer);
  }, [category, searchQuery]);

  return (
    <div>
      <div>
        <p className="heading">Daily News</p>
        <p className="published-date">{publishedDate}</p>
      </div>
      <Navbar
        onCategoryChange={setCategory}
        onSearchQueryChange={setSearchQuery}
      />
      <div className="news">
        {newsData.map(
          news => news.image_url && <Card key={news.article_id} data={news} />
        )}
      </div>
      <div className="nextpage">
        <button disabled={!nextPage} onClick={handleFetchData}>Load More</button>
        <button onClick={handleScrollToTop}>Scroll To Top</button>
      </div>
    </div>
  );
};

export default App;
