import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Title from '../Title/Title'
import './App.css';

const products = ["Bread", "Ice", "Beer", "Chips"]
const products2 = ["silk", "cotton", "wood"]

function App() {
  return (
    <div className="app">
      <Title />
      <SearchBar productList={products}/>
      <SearchBar productList={products2}/>
    </div>
  );
}

export default App;
