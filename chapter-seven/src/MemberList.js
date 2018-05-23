import React, { Component } from 'react'
import getFakeMembers from './getFakeMembers'
import Clock from './Clock'

const Member = ({ email, picture, name, location }) =>
    <figure>
        <img src={picture.thumbnail} alt="" />
        <figcaption>
            <address>
                <p>
                    <a href={`mailto:${email}`}>
                        {name.first} {name.last}
                    </a>
                </p>
                <p>
                    {location.city}, {location.state}
                </p>
            </address>
        </figcaption>
    </figure>

class MemberList extends Component {
    constructor() {
        super()

        this.addMembers = this.addMembers.bind(this)

        this.state = {
            members: [],
            loading: false,
            error: null
        }
    }

    addMembers() {
        this.setState({loading: true})

        getFakeMembers(5).then(
            newMembers => {
                this.setState({
                    members: [
                        ...this.state.members,
                        ...newMembers
                    ],
                    loading: false
                })
            },
            error => {
                this.setState({error, loading: false})
            }
        )
    }

    componentDidMount() {
        this.setState({loading: true})

        getFakeMembers(this.props.count).then(
            members => {
                this.setState({members, loading: false})
            },
            error => {
                this.setState({error, loading: false})
            }
        )
    }

    componentWillUpdate() {
        console.log('updating lifecycle')
    }

    render() {
        const { members, loading, error } = this.state
        const { addMembers } = this

        return (
            <section>
                <h3>
                    MemberList
                </h3>
                {(loading) ?
                    <span>Loading members...</span> :
                    (members.length) ?
                        members.map((user, i) =>
                        <Member key={i} {...user} />
                    ) :
                    <span> 0 members loaded...</span>
                }

                {(error) ? <p>Error Loading Members: {error}</p> : ''}

                <hr />
                <p>
                    <button onClick={addMembers}>Загрузить ещё 5 пользователей</button>
                </p>
                <p>
                    <Clock />
                </p>
                <hr />
            </section>
        )
    }
}

export default MemberList
