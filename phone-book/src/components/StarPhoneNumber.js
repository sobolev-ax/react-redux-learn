import React from 'react'

const StarPhoneNumber = ({selected, ratingNumber, id, nomer}) =>
    <span 
        className={selected ? "star-phone-number selected" : "star-phone-number"}
        onClick={() => ratingNumber(id, nomer)}></span>

export default StarPhoneNumber;
