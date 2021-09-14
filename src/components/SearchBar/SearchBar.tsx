import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }
  const  handleClickClear = () => {
    setSearchText("")
  }
  const shouldRenderButton = searchText.length > 0;

  return (
    <div>
      <input type="text" onChange={handleInputChange} value={searchText}/>
      <br />
      {shouldRenderButton && <button onClick={handleClickClear}>Clear</button>}
    </div>
  )
}

export default SearchBar;