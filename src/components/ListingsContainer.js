import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onRemoveListing }) {
  const listingCards = listings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} onRemoveListing={onRemoveListing}/>;
  });

  return (
    <main>
      <ul className="cards">{listingCards}</ul>
    </main>
  );
}

export default ListingsContainer;
