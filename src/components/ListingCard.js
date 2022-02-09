import React, { useState } from "react";

function ListingCard({ listing: { id, description, image, location }, onRemoveListing }) {
  const [favorite, setFavorite] = useState(false);

function handleDeleteListing () {
  fetch(`http://localhost:6001/listings/${id}`, {
    method:"DELETE",
  });
  onRemoveListing(id);
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            className="emoji-button favorite active"
            onClick={() => setFavorite(false)}
          >
            ★
          </button>
        ) : (
          <button
            className="emoji-button favorite"
            onClick={() => setFavorite(true)}
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteListing}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
