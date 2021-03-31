import React from 'react'
import { Row, Col } from 'antd';
import FoodBlog from "./FoodBlog";
import Chowmein from "../assets/chowmein.jpg";
import Dosa from "../assets/dosa.jpg";
import Pavbhaji from "../assets/pavbhaji.jpg";
import {NavLink} from "react-router-dom";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Blogs = () => {
    return (
        <div className="blog">
            <h2 style={{
                marginLeft: "90px",
                // marginTop: "50px",
                lineHeight:"158%",
                fontWeight: "800",
                fontSize: "45px", 
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                color:"rgba(255, 127, 39)"
            }}>Food Blogs</h2>
            <div className="blog_items">
                <FoodBlog image={Chowmein}/>
                <FoodBlog image={Dosa}/>
                <FoodBlog image={Pavbhaji}/>
            </div>
            <div className="blog_button" style={{
                display:"flex",
                justifyContent:"center",
                alignItem:"center",
                textAlign:"center"
            }}>
                <NavLink to="/moreblog"><button style={{
                    backgroundColor:"#000000",
                    borderRadius:"50px",
                    padding:"10px 20px",               
                    border: "none",
                    outline:"none",
                    color: "white",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    justifyContent:"center",
                    fontSize: "16px",
                    cursor:"pointer",
                    verticalAlign:"right"
                }}>More<span style={{
                    verticalAlign:"middle"
                }}><ArrowDropDownIcon/></span></button></NavLink>
            </div>
        </div>
    )
}

export default Blogs
