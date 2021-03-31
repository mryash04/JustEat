import React from 'react';

import Burger from "../assets/burger.webp";
import FoodGalleryItem from "./FoodGalleryItem";

const FoodGallery = () => {
    return (
        <div className="food_gallery">
            <h2>Food Gallery</h2>
            <div className="food_item" style={{margin:"0 80px", display:"grid", gridGap: '1rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))'}}>
            <img src={Burger} alt="" style={{width:"150px", height:"150px"}}/>
            <img src={Burger} alt="" style={{width:"150px", height:"150px"}}/>
            <img src={Burger} alt="" style={{width:"150px", height:"150px"}}/>
            <img src={Burger} alt="" style={{width:"150px", height:"150px"}}/>
            <img src={Burger} alt="" style={{width:"150px", height:"150px"}}/>
            <img src={Burger} alt="" style={{width:"150px", height:"150px"}}/>
            <img src={Burger} alt="" style={{width:"150px", height:"150px"}}/>
            <img src={Burger} alt="" style={{width:"150px", height:"150px"}}/>
            <img src={Burger} alt="" style={{width:"150px", height:"150px"}}/>
            <img src={Burger} alt="" style={{width:"150px", height:"150px"}}/>
            <img src={Burger} alt="" style={{width:"150px", height:"150px"}}/>
            <img src={Burger} alt="" style={{width:"150px", height:"150px"}}/>
            <img src={Burger} alt="" style={{width:"150px", height:"150px"}}/>
            <img src={Burger} alt="" style={{width:"150px", height:"150px"}}/>
            </div>
        </div>
    )
}

export default FoodGallery