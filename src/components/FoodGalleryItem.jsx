import React from 'react'
import Burger from "../assets/burger.webp";
import Dosa from "../assets/dosa.jpg";
import Itli from "../assets/itli.jpg";
import Roll from "../assets/roll.jpeg";
import "../styles/FoodGalleryItem.css";

const FoodGalleryItem = () => {
    return (
        <div className="food_gallery_item">
            <img src={Burger} alt="" />
            <img src={Dosa} alt="" />
            <img src={Itli} alt="" />
            <img src={Roll} alt="" />
        </div>
    )
}

export default FoodGalleryItem