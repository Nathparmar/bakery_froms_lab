import { useState } from "react";

const CakeForm = ({ addCake }) => {



    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState("");

    const updateCakeName = (event) => {
        setCakeName(event.target.value);
    }

    const updateCakeIngredients = (event) => {
        setIngredients(event.target.value.split('\n'));
    }

    const updateCakeRating = (event) => {
        setRating(event.target.value);
    }

    const updateCakePrice = (event) => {
        setPrice(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // if (!cakeName || !ingredients || !rating || !price){
        //     alert("Need to provide all details");
        //     return;
        // }

        const newCake = {
            cakeName: event.target.value,
            ingredients: ingredients,
            rating: rating,
            price: price,
            id: Date.now()
        }
        setCakeName("");
        setIngredients("");
        setRating("");
        setPrice("");
        addCake(newCake);
    }


    return ( 
        <section>
            <h2>Add a new cake:</h2>
            <form onSubmit={(event) => handleFormSubmit(event)}>
                <label htmlFor="name-input">Name:</label>
                <input 
                    type="text"
                    id="name-input"
                    onInput={(event) => updateCakeName(event)}
                    value={cakeName}
                />
                <label htmlFor="ingredients-input">Ingredients:</label>
                <input 
                    type="text"
                    id="ingredients-input" 
                    onInput={(event) => updateCakeIngredients(event)}
                    value={ingredients}
                />
                <label htmlFor="rating-input">Rating:</label>
                <input 
                    type="text"
                    id="rating-input"
                    onInput={(event) => updateCakeRating(event)}
                    value={rating}
                />
                <label htmlFor="price-input">Price:</label>
                <input 
                    type="text"
                    id="price-input"
                    onInput={(event) => updateCakePrice(event)}
                    value={price}
                />
                <input type="submit" value="Add New Cake"/>
            </form>
        </section>
    );
}

export default CakeForm;