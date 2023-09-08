// //import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="https://bestanimations.com/Animals/Mammals/Cats/cats/cute-kitty-animated-gif-12.gif" alt="cat sleeping gif"
//             height="200px" width="200px"/>
        
//         <h1>Cat Breed Recommendation App</h1>
//         <p>Which Cat Breed Is Best For You?</p>
//         <p class="summary">Take our quiz to find out which cat is sutible for you!</p>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import CatBreedBox from './components/CatBreedBox'; // Import your CatBreedBox component
// import catBreedsData from './catBreedsData'; // Import your data source

// function App() {
//   return (
//     <div className="app">
//       <h1>Cat Breed Library</h1>
//       <div className="cat-breed-container">
//         {catBreedsData.map((breed, index) => (
//           <CatBreedBox
//             key={index}
//             breedName={breed.breedName}
//             imageSrc={breed.imageSrc}
//             description={breed.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


// import './App.css';
// import React from 'react';
// import CatBreedBox from './components/CatBreedBox'; // Import your CatBreedBox component
// import catBreedsData from './catBreedsData.json'; // Import the JSON data

// function App() {
//   return (
//     <div className="App">
//       {catBreedsData.map((breedData, index) => (
//     <CatBreedBox
//     key={index}
//     breedName={breedData.breedName}
//     imageSrc={breedData.imageSrc}
//     description={breedData.description}
//     className="cat-breed-box" // Add the class name here
//   />
// ))}

//     </div>
//   );
// }

// export default App;






// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch

import CatBreedBox from './components/CatBreedBox';
import CatDescription from './components/CatDescription';

import catBreedsData from './catBreedsData.json';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<div className="App">
          {catBreedsData.map((breedData, index) => (
            <CatBreedBox
              key={index}
              breedName={breedData.breedName}
              imageSrc={breedData.imageSrc}
              description={breedData.description}
            />
          ))}
        </div>} />
        <Route path="/description/:breedName" element={<CatDescription />} />
      </Routes>
    </Router>
  );
}

export default App;

