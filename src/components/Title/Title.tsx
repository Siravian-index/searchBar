import React from 'react';
import './Title.css';

const Title = () => {
  const mainTitle = "Type Search App"
  return (
    <div className="container">
      <h1 className="main-title">{mainTitle}</h1>
    </div>
  )
}

export default Title;