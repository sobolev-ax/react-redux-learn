import React from 'react';
import StarPhoneNumber from './StarPhoneNumber'

const RatingPhoneNumber = ({count = 5, rating = 0, ratingNumber, id}) => {
    const stars = [...Array(count)].map((item, i) =>
        <StarPhoneNumber id={id} nomer={i + 1} ratingNumber={ratingNumber} selected={i < rating ? true : false} key={i}/>
    );
    return (
        <span>
            {stars}
        </span>
    )
}

export default RatingPhoneNumber;
