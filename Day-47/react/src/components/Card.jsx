import React from "react";
import "./Card.css";

const Card = ({ data }) => {

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="card">
      <img
        src={data.image_url}
        alt={data.title}
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/placeholder.webp";
        }}
      />

      <h3>{data.title}</h3>

      <p>{data.description ?? "Click read more to view full article."}</p>

      <button onClick={() => handleClick(data.source_url)}>
        Read More
      </button>
    </div>
  );
};

export default Card;
