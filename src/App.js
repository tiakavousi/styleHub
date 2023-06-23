import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      id:1, title:"Hats"
    },
    {
      id:2, title:"Jackets"
    },
    {
      id:3, title:"Sneakers"
    },
    {
      id:4, title:"Womens"
    },
    {
      id:5, title:"Mens"
    }
  ]
  return (
    <div>
     <div className="categories-container">
     {categories.map(({title}) =>{
      return(
        <div className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h1>{title}</h1>
            <p>Shop now</p>
          </div>
        </div>
      );})}
     </div>
    </div>
  );
}

export default App;
