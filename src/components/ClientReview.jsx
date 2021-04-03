import React from 'react'
import "../styles/ClientReview.css";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const ClientReview = () => {
    return (
        <div className="client_review">
            <div className="client_review_quote_icon">
                <FormatQuoteIcon className="quote_icon"/>
            </div>
            <div className="client_review_text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa error expedita nulla eligendi fuga vitae quaerat tenetur placeat nisi maiores, aspernatur quae, aliquam repudiandae accusamus dolore ab officiis facere!</p>
            </div>
            <div className="client_name">
                <h2>Akshay Kumar</h2>
            </div>
            <div className="client_country">
                <p>India</p>
            </div>
        </div>
    )
}

export default ClientReview
