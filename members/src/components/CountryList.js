import React, { Component } from 'react'
import { render } from 'react-dom'
import fetch from 'isomorphic-fetch'

class CountryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contryNames: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch('https://restcountries.eu/rest/v1/all')
            .then(response => response.json())
            .then(json => json.map(country => country.name))
            .then(contryNames =>
                this.setState({contryNames, loading: false})
            )
    }

    render() {
        const { contryNames, loading } = this.state
        return (loading) ?
            <div>Loading Country Names...</div> :
            (!contryNames.length) ?
                <div>No country Names</div> :
                <ul>
                    {contryNames.map(
                        (x, i) => <li key={i}>{x}</li>
                    )}
                </ul>
    }
}

export default CountryList;
