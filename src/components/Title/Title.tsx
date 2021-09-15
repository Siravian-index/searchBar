import React from 'react';
import './Title.css';

const Title = (props: { mainTitle: string }) => {
  // const mainTitle = "Type Search App"
  return (
    <div className="container">
      <h1 className="main-title">{props.mainTitle}</h1>
    </div>
  )
}

export default Title;