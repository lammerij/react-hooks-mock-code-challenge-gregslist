import React, { useState } from "react";
import Header from "./Header";
// import ListingCard from "./ListingCard";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState("")

  function handleSearchChange(newSearch){
    setSearch(newSearch)
  }


  return (
    <div className="app">
      <Header handleSearchChange={handleSearchChange} />
      <ListingsContainer search={search} />
      
    </div>
  );
}

export default App;
