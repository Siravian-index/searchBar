import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props: { productList: string[], fetchedProducts: boolean }) => {
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }
  const handleClickClear = () => {
    setSearchText("")
  }
  const shouldRenderButton = searchText.length > 0;

  const stardarizedProducts = props.productList.map(ele => ele.toLocaleLowerCase())
  const filterProducts = stardarizedProducts.filter((product) => {
    return product.includes(searchText.toLocaleLowerCase())
  })

  return (
    <div className="container">
      <input className="search-bar" type="text" onChange={handleInputChange} value={searchText} />
      {shouldRenderButton && <button className="clear-button" onClick={handleClickClear}>Clear</button>}
      <ul className="ul-container">
        {filterProducts.map(ele => {
          return <li className="li-item" key={ele}>{ele.replace(/^./, ele.slice(0, 1).toLocaleUpperCase())}</li>
        })}
      </ul>
      {props.fetchedProducts && filterProducts.length === 0 && <div>Item not found</div>}

    </div>
  )
}

export default SearchBar;