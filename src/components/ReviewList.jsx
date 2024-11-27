// src/components/ReviewList.js
import React from "react";
import { Rating } from "@mui/material";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0"); // Get day and pad with zero if needed
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (0-based) and pad
  const year = date.getFullYear(); // Get full year
  return `${day}/${month}/${year}`; // Format as dd/mm/yyyy
};
function ReviewList({ reviews }) {
  return (
    <ul
      className="review-list list-unstyled mb-0"
      style={{
        maxHeight: "300px",
        overflowY: "auto",
        border: "1px solid #dee2e6",
        borderRadius: "0.25rem",
        padding: "10px",
      }}
    >
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <li
            key={review.id}
            className="review-item mb-3 p-3 rounded border-bottom"
          >
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="mb-0">{review.name}</h6>
              <Rating
                name="read-only"
                value={review.rating}
                readOnly
                precision={0.5}
              />
            </div>
            <p className="text-muted mt-1">{review.comment}</p>
            <small className="text-muted">{formatDate(review.date)}</small>{" "}
            {/* Use formatted date */}
          </li>
        ))
      ) : (
        <p>No reviews available for this product.</p>
      )}
    </ul>
  );
}

export default ReviewList;
