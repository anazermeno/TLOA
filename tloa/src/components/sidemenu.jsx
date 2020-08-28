import React, { Component } from 'react'
import './styles.css';

export default class Sidemenu extends Component {
    render () {
        return (
            <div>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" type="text/css" href="./styles.css"/>
                </head>
                <body id="body_navbar">
                    <div class="sidenav">
                        <a href="#">About</a><br/>
                        <a href="#">Projects</a><br/>
                        <a href="#">Resources</a><br/>
                        <a href="#">Gallery</a><br/>
                    </div>
                </body>
            </div>
        )
    }
}
