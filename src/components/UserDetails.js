import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import '../App.css'

export default class UserDetails extends Component {

    viewDetails = (e) => {
        if (e.target.innerHTML === 'View Address') {
            let address = document.createElement('div')
            address.id = 'address'
            address.innerHTML = `<h1>Address</h1>
                <p><b>Street:</b> ${this.props.user.address.street}</p>
                <p><b>City:</b> ${this.props.user.address.city}</p>
                <p><b>Suite:</b> ${this.props.user.address.suite}</p>
                <p><b>Zip code:</b> ${this.props.user.address.zipcode}</p>`
            document.getElementById('userId').appendChild(address)
        } else {
            let company = document.createElement('div')
            company.id = 'company'
            company.innerHTML = `<h1>Company</h1>
                <p><b>Name:</b> ${this.props.user.company.name}</p>
                <p><b>Bs:</b> ${this.props.user.company.bs}</p>
                <p><b>Catch Phrase:</b> ${this.props.user.company.catchPhrase}</p>`
            document.getElementById('userId').appendChild(company)
        }
    }

    render() {
        console.log(this.props.user)
        return (
            <Jumbotron>
                <div id='userId'>
                    <h1>{this.props.user.name}</h1>
                    <p><b>Username:</b> {this.props.user.username}</p>
                    <p><b>Email:</b> {this.props.user.email}</p>
                    <p><b>Phone:</b> {this.props.user.phone}</p>
                    <p><b>Website:</b> {this.props.user.website}</p>
                </div>
                <div>
                    <span className='margin-buttons'><Button variant="info" onClick={e => this.viewDetails(e)}>View Address</Button></span>
                    <span className='margin-buttons'><Button variant="info" onClick={e => this.viewDetails(e)}>View Company</Button></span>
                    <span className='margin-buttons'><Button variant="primary" href='/'>Back to Home</Button></span>
                </div>
            </Jumbotron>
        )
    }

}
