import React, { Component } from 'react'
import StarRating from './StarRating'

class Color extends Component {
    render() {
        const { onRemove, id, title, color, rating, onRate } = this.props
        return (
            <section style={{background: color}}>
                <button onClick={() => onRemove(id)}>
                    X
                </button>
                <h5>
                    {title}
                </h5>
                <StarRating myId={id} rating={rating} onRate={onRate}/>
            </section>
        )
    }
}

export default Color
