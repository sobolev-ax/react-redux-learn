import React, { Component } from 'react'
import HiddenMessage from './HiddenMessage'

class HiddenMessages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [
                "The crow crows after midnight",
                "Bring a watch and dark clothes to the spot",
                "Jericho Jericho Go"
            ],
            showing: -1
        }
    }

    componentWillMount() {
        this.interval = setInterval(() => {
            let { showing, messages } = this.state
            showing = (++showing >= messages.length) ?
                0 :
                showing
            this.setState({showing})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { messages, showing } = this.state
        return (
            <ul>
                {messages.map((ms, i) =>
                    <HiddenMessage hide={(i!==showing)} key={i}>
                        {ms}
                    </HiddenMessage>
                )}
            </ul>
        )
    }
}

export default HiddenMessages
