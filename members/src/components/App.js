import React, { Component } from 'react'
import { Children, PropTypes } from 'react'
import { render } from 'react-dom'
import { v4 } from 'uuid'
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'
import colors from '../data/colors'
import MemberList from './MemberList'
import CountryList from './CountryList'
import '../stylesheets/all.css'
// import '../../stylesheets/APP.scss'

const findChild = (children, child) =>
    Children.toArray(children)
        .filter(c => c.type === child)[0]

const WhenTruthy = ({children}) =>
    Children.only(children)

const WhenFalsy = ({children}) =>
    Children.only(children)

const Display = ({ ifTruthy=true, children }) =>
    (ifTruthy) ?
        findChild(children, WhenTruthy) :
        findChild(children, WhenFalsy)

const age = 19;

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            colors
        }
        this.addColor = this.addColor.bind(this)
        this.rateColor = this.rateColor.bind(this)
        this.removeColor = this.removeColor.bind(this)
    }

    addColor(title, color) {
        this.setState(prevState => ({
            colors: [
                ...prevState.colors,
                {
                    id: v4(),
                    title,
                    color,
                    rating: 0
                }
            ]
        }))
    }

    rateColor(id, rating) {
        this.setState(prevState => ({
            colors: prevState.colors.map(color =>
                (color.id !== id) ?
                    color :
                    {
                        ...color,
                        rating
                    }
            )
        }))
    }

    removeColor(id) {
        this.setState(prevState => ({
          colors: prevState.colors.filter(color => color.id !== id)
        }))
    }

    render() {
        const { addColor, rateColor, removeColor } = this
        const { colors } = this.state
        return (
            <div className="app">
                <section>
                    <CountryList />
                    <span>Hello</span>
                </section>
                <Display ifTruthy={age >= 21}>
                    <WhenTruthy>
                        <h1>You can Enter</h1>
                    </WhenTruthy>
                    <WhenFalsy>
                        <h1>Beat it Kid</h1>
                    </WhenFalsy>
                </Display>
                <MemberList count={3}/>
                <AddColorForm onNewColor={addColor} />
                <ColorList colors={colors}
                           onRate={rateColor}
                           onRemove={removeColor} />
            </div>
        )
    }

}
