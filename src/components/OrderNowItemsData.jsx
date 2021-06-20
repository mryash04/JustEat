import React from 'react';
import OrderNowItems from './orderNowItems';
import Vegburger from "../assets/burger.webp";
import Vegmomos from "../assets/Veg Momos.jpg";
import pizza from "../assets/pizza.jpg";
import PavBhaji from "../assets/pavbhaji.jpg";
import dosaOne from "../assets/dosaOne.jpg";

const OrderNowItemsData = () => {
    return (
        <div>
            <OrderNowItems id = {1}
            image = {Vegburger}
            foodName = "Veg Burger"
            price = {40}
             />
            <OrderNowItems id = {2} 
            image = {Vegmomos}
            foodName = "Veg Momos"
            price = {50}
            />
            <OrderNowItems id = {3}
            image = {pizza}
            foodName = "Pizza"
            price = {70}
             />
            <OrderNowItems id = {4}
            image = {PavBhaji}
            foodName = "Pav Bhaji"
            price = {30}
            />
            <OrderNowItems id = {5}
            image = {dosaOne}
            foodName = "Dosa"
            price = {50}
            />
        </div>
    )
}

export default OrderNowItemsData
