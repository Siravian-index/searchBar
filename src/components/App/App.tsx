import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Title from '../Title/Title'
import './App.css';

// const products = ["Bread", "Ice", "Beer", "Chips"]
// const products2 = ["silk", "cotton", "wood"]

function App() {
  const [products, setProducts] = useState([] as string[])

  useEffect(() => {
    setTimeout(() => {
      setProducts(["Bread", "Ice", "Beer", "Chips"])
    }, 2000)
  }, []);

  const hasProducts = products.length > 0


  return (
    <div className="app">
      <Title mainTitle="Type Search App" />
      <SearchBar productList={products} fetchedProducts={hasProducts}/>
      {!hasProducts && <div className="container">Loading...</div> }
    </div>
  );
}

export default App;
