import React, { Component } from 'react'
import Board from './Board';
import Navigation from './Navigation';
import ControlledCarousel from './ControlledCarousel';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <ControlledCarousel />
                <Board />
            </div>
        )
    }
}
