import React, { Component } from 'react'
import './styles.css';

export default class Sidemenu extends Component {
    render () {
        return (
            <div>
                <div id="body_navbar">
                    <div class="sidenav">
                        <a href="#">About</a><br/>
                        <a href="#">Projects</a><br/>
                        <a href="#">Resources</a><br/>
                        <a href="#">Gallery</a><br/>
                    </div>
                </div>
            </div>
        )
    }
}
