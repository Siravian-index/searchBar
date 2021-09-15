import './Title.css';

const Title = (props: { mainTitle: string }) => {
  return (
    <div className="container">
      <h1 className="main-title">{props.mainTitle}</h1>
    </div>
  )
}

export default Title;