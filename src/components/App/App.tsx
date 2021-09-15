import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Title from '../Title/Title'
import './App.css';

const urlToFetch = 'https://fakestoreapi.com/products/'

function App() {
  const [products, setProducts] = useState([] as string[])

  useEffect(() => {
    fetch(urlToFetch)
      .then(response => response.json())
      .then(productsArray => {
        const temporalProductsHolder: string[] = productsArray.map((product: { title: string }) => {
          return product.title
        })
        setProducts(temporalProductsHolder)
      })

  }, [])

  const hasProducts = products.length > 0

  return (
    <div>
      <Title mainTitle="Type Search App" />
      <SearchBar productList={products} fetchedProducts={hasProducts} />
      {!hasProducts && <div className="container">Loading...</div>}
    </div>
  );
}

export default App;