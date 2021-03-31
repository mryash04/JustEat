import React from 'react'
import Chowmein from "../assets/chowmein.jpg";
import "../styles/Foodblog.css";

const FoodBlog = (props) => {
    return (
        <div className="food_blog">
            <img src={props.image} alt="" />
            <div className="food_blogdata">
                <h2>How to make chowmein at home</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vero excepturi nobis molestias provident adipisci dicta repellat beatae ipsa numquam.</p>
            </div>
        </div>
    )
}

export default FoodBlog
