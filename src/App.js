import React from 'react';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { FoodBox } from './components/FoodBox';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  console.log(foods);

  return (
    <div className="App">
      {allFoods.map((currentElement) => {
        return (
          <>
            <p> {currentElement.name} </p>
            <img src={currentElement.image} width={300} />
          </>
        );
      })}
      <div>
        <FoodBox
          food={{
            name: 'Orange',
            calories: 85,
            image: 'https://i.imgur.com/abKGOcv.jpg',
            servings: 1,
          }}
        />
      </div>
      <div>
        <h2>List of foods in our app:</h2>
        {foods.map((element) => {
          return <FoodBox food={element} />;
        })}
      </div>
    </div>
  );
}

export default App;
