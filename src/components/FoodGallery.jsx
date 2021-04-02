import React from 'react';
import Burger from "../assets/burger.webp";
import FoodGalleryItem from "./FoodGalleryItem";

const FoodGallery = () => {
    return (
        <div className="food_gallery">
            <h2 style={{marginLeft: "90px",
                // marginTop: "50px",
                lineHeight:"158%",
                fontWeight: "800",
                fontSize: "45px", 
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                color:"rgba(255, 127, 39)"}}>Food Gallery</h2>
            <div className="food_item" style={{margin: "auto",width:"60%"}}>
            {/* <img src={Burger} alt="" style={{width:"150px", height:"150px"}}/> */}
            <FoodGalleryItem />
            <FoodGalleryItem />
            <FoodGalleryItem />
            </div>
        </div>
    )
}

export default FoodGallery