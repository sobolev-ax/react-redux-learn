import React, { Component } from 'react'
import { v4 } from 'uuid'
import AddColor from './AddColor'
import Color from './Color'

class ColorList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            colors: props.colors || []
        }

        this.addColor = this.addColor.bind(this)
        this.removeColor = this.removeColor.bind(this)
        this.changeRating = this.changeRating.bind(this)
    }

    addColor(title, color) {
        this.setState(prevState => ({
            colors: [
                ...prevState.colors,
                {
                    'id': v4(),
                    'title': String(title),
                    'color': String(color),
                    'rating': 0
                }
            ]
        }))
    }

    removeColor(id) {
        this.setState(prevState => ({
            colors: prevState.colors.filter(color => color.id !== id)
        }))
    }

    changeRating(id, rating) {
        this.setState(prevState => ({
            colors: prevState.colors.map(color =>
                (String(color.id) === String(id)) ?
                    {
                        ...color,
                        rating
                    } :
                    color
                )
        }))
    }

    render() {
        const { addColor, removeColor, changeRating } = this
        const { colors } = this.state

        return (
            <article>
                <h3>
                    ColorList
                </h3>
                {colors.map((color, i) =>
                    <Color
                        {...color}
                        key={color.id}
                        onRate={changeRating}
                        onRemove={removeColor} />
                )}
                <AddColor
                    onNewColor={addColor} />
            </article>
        )
    }
}

export default ColorList
