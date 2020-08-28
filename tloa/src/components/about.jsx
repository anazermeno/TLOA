import React, { Component } from 'react';
import './styles.css';
import profilepic from './media/profilepic.jpeg';


export default class About extends Component{
    render (){
        return (

                <div id="body_about">
                    <h1>Welcome to my page!</h1>
                    <img src={profilepic} id="img_about"/>
                    <h2>Hi there!</h2>
                    <p>My name is Ana, I'm studying Computer Science at Tec de Monterrey</p>
                </div>
        )
    } 
}