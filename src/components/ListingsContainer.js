import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState()
  console.log(listings)

  useEffect(() => {
    fetch(" http://localhost:6001/listings")
    .then((response) => response.json())
    .then((listings) => setListings(listings));
  }, []);

  return (
    <main>
      <ul className="cards">
        {listings?.map((listing) => (
          < ListingCard
          key={listing.id}
          listing={listing}
          image={listing.image}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
