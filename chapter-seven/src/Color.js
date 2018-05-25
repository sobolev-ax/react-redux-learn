import React, { Component } from 'react'
import StarRating from './StarRating'

class Color extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: props.color
        }
    }

    componentWillMount() {
        this.style = { backgroundColor: "#CCC" }
    }
    shouldComponentUpdate(nextProps) {
        const { rating } = this.props
        return rating !== nextProps.rating
    }
    componentWillUpdate(nextProps) {
        const { title, rating } = this.props
        this.style = null

        this.refs.title.style.backgroundColor = "red"
        this.refs.title.style.color = "white"

        alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
    }
    componentDidUpdate(prevProps) {
        const { title, rating} = this.props
        const status = (rating > prevProps.rating) ? 'better' : 'worse'

        this.refs.title.style.backgroundColor = ""
        this.refs.title.style.color = ""
        console.log(`${title} is getting ${status}`)
    }

    render() {
        const { onRemove, id, title, rating, onRate } = this.props
        const { color } = this.state
        return (
            <section style={this.style}>
                <button ref="title" onClick={() => onRemove(id)}>
                    X
                </button>
                <h5 style={{background: color}}>
                    {title}
                </h5>
                <StarRating myId={id} rating={rating} onRate={onRate}/>
            </section>
        )
    }
}

export default Color
