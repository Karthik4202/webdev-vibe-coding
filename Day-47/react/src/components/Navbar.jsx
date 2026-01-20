import React from "react";
import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onCategoryChange, onSearchQueryChange }) => {
  const [input, setInput] = useState("");

  const handleSearchInput = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    if (input.trim() === "") return;
    onSearchQueryChange(input);
  };

  const handleOnCategoryChange = (category) => {
    setInput("");
    onSearchQueryChange(""); 
    onCategoryChange(category);
  }
  return (
    <>
      <nav>
        <ul className="categories">
          <li onClick={() => handleOnCategoryChange("top")}>Top</li>
          <li onClick={() => handleOnCategoryChange("politics")}>Politics</li>
          <li onClick={() => handleOnCategoryChange("business")}>Business</li>
          <li onClick={() => handleOnCategoryChange("technology")}>Technology</li>
          <li onClick={() => handleOnCategoryChange("sports")}>Sports</li>
          <li onClick={() => handleOnCategoryChange("entertainment")}>Entertainment</li>
          <li onClick={() => handleOnCategoryChange("health")}>Health</li>
        </ul>
        <div className="search">
          <input
            type="text"
            placeholder="Search news"
            onChange={handleSearchInput}
            value={input}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          ></input>
          <button onClick={handleSearch} disabled={!input.trim()}>Search</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
