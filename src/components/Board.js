import React, { Component } from 'react'
import { Table, Button, Spinner } from 'react-bootstrap'
import '../App.css'

const axios = require('axios')

export default class Board extends Component {
    
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
                console.log('Error in get users: ', err)
            })
    }

    render() {
        if (this.state.loading === false) {
            const users = this.state.users.map(user => {
                return (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td><Button variant="info" href={`user/${user.id}`}>Info</Button></td>
                    </tr>
                )
            })
            return (
                <div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users}
                        </tbody>
                    </Table>
                </div>
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
