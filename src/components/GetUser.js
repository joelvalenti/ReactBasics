import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'
import UserDetails from './UserDetails'

const axios = require('axios')

export default class GetUser extends Component {

    constructor() {
        super()
        this.state = {
            loading: true,
            users: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({ loading: false, users: res.data })
            })
            .catch(err => {
                console.log('Error in get user: ', err)
            })
    }

    render() {
        if (this.state.loading === false) {
            const urlId = this.props.match.params.id;
            const getUser = this.state.users.filter(user => user.id == urlId)
            return (
                <UserDetails user={getUser[0]} />
            )
        } else {
            return (
                <div className='spinner'>
                    <Spinner animation="grow" role="status">
                    </Spinner>
                </div>
            )
        }
    }
}
