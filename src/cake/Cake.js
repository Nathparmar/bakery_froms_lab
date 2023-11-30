const Cake = ({cakeName, ingredients, price, rating}) => {

  return (
    <>
        <h2>{cakeName}</h2>
        <p>Ingredients:</p>
        <ul>
            {ingredients.map((ingredient) => (
            <li>{ingredient}</li>
            ))}
        </ul>
        <p><b>Price: </b>{price}</p>
        <p><b>Rating: </b>{rating}</p>
    </>
  )
}

export default Cake;