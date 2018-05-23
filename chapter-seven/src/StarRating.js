import React from 'react'
import Star from './Star'

const StarRating = ({onRate, myId, rating=0, totalStars=5}) => {
    return (
        <section>
            <h6>Rating:</h6>
            {[...Array(totalStars)].map((n, i) =>
                <Star
                    onRate={onRate}
                    myId={myId}
                    index={i}
                    key={i}
                    rating={rating}/>
            )}
        </section>
    )
}

export default StarRating
