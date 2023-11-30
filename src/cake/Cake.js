const Cake = ({cakeName, ingredients, price, rating}) => {

  return (
    <section id="cakeContainers">
        <h2>{cakeName}</h2>
        <p><b>Ingredients:</b></p>
        <ul>
            {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
            ))}
        </ul>
        <p><b>Price: £</b>{price}</p>
        <p><b>Rating: </b>{rating}</p>
    </section>
  )
}

export default Cake;