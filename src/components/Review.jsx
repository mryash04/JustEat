import React from 'react'
import ClientReview from "./ClientReview";

const Review = () => {
    return (
        <div className="review">
            <h2 style={{
                fontWeight: "800",
                fontSize: "45px",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                textAlign:"center",
            }}>Client Review</h2>
            <div className="client_reviews" style={{display:"flex",justifyContent:"space-evenly", alignItems:"center"}}>
                <ClientReview />
                <ClientReview />
                <ClientReview />
            </div>
        </div>
    )
}

export default Review
