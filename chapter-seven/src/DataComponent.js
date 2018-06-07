import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

const DataComponent = (ComposedComponent, url) =>
    class DataComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: [],
                loading: false,
                loaded: false
            }
        }

        componentWillMount() {
            this.setState({loading: true})
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({
                    loaded: true,
                    loading: false,
                    data
                }))
        }

        render() {
            return (
                <section>
                    {(this.state.loading) ?
                        <div>Loading...</div> :
                        <ComposedComponent {...this.state}
                                           {...this.props} />}
                </section>
            )
        }
    }

export default DataComponent
