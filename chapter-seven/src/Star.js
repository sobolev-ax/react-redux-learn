import React from 'react'

const Star = ({ myId, index, rating=0, onRate=f=>f }) => (
    <button
        onClick={() => {
            if (index + 1 === rating) return
            onRate(myId, index + 1)
        }}
        className={index < rating ? "active star" : "star"}>
    </button>
)

export default Star
