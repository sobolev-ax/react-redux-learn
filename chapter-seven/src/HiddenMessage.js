import React, { Component } from 'react'

class HiddenMessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: (props.hide) ? props.hide : false
        }

        this.hide = this.hide.bind(this)
        this.show = this.show.bind(this)
    }

    hide() {
        const hidden = true
        this.setState({hidden})
    }

    show() {
        const hidden = false
        this.setState({hidden})
    }

    componentWillReceiveProps(nextProps) {
        this.setState({hidden: nextProps.hide})
    }
    render() {
        const { children } = this.props
        const { hidden } = this.state
        return (
            <li onMouseEnter={this.show}
                onMouseLeave={this.hide}>
                {(hidden) ?
                    String(children).replace(/[a-zA-Z0-9]/g, 'x'):
                    children
                }
            </li>
        )
    }
}

export default HiddenMessage
