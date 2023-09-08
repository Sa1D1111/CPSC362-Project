// CatDescription.js
import React from 'react';
import { useParams } from 'react-router-dom';

function CatDescription() {
  const { breedName } = useParams();

  // Fetch the description based on the breedName from your data
  // You can use the breedName to filter the catBreedsData array and get the corresponding description

  return (
    <div>
      <h2>{breedName}</h2>
      {/* Display the description here */}
    </div>
  );
}

export default CatDescription;
