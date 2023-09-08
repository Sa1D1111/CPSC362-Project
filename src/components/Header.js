import React from 'react';

function Header() {
  return (
    <header className="App-header">
      {/* Place your cat animation and header content here */}
      <img src="https://bestanimations.com/Animals/Mammals/Cats/cats/cute-kitty-animated-gif-12.gif" alt="cat sleeping gif" height="200px" width="200px" />
      <h1>Cat Breed Recommendation App</h1>
      <p>Which Cat Breed Is Best For You?</p>
      <p className="summary">Take our quiz to find out which cat is suitable for you!</p>
    </header>
  );
}

export default Header;
