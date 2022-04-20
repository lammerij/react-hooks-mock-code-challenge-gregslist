import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search}) {
  const [listings, setListings] = useState([]);
  // console.log(listings.length)

  useEffect(() => {
    fetch(" http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setListings(data));
  }, []);

  function handleDeleteListing(id){
    const updatedListings = listings.filter(listing => listing.id !== id
    );
    setListings(updatedListings)
  }

  const filteredListings = listings.filter(listing =>{
    return listing.description.toLowerCase().includes(search.toLowerCase())
  });


  return (
    <main>
      <ul className="cards">
        {filteredListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} handleDeleteListing={handleDeleteListing} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
