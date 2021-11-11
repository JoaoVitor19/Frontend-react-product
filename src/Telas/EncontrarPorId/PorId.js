import React, { useState, useEffect } from 'react';
import Menu from "../../components/Menu/Menu"
import axios from 'axios'
import './PorId.css'

export default class PorId extends React.PureComponent {

    state = {
        name:'',
        id: 0,
    }

    handleChange = event => {
        this.setState({ id: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.get(`http://localhost:8080/usuario/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
    });
}
    render(){
        return (
            <div>
                <Menu />
                    <form className="container-porid" onSubmit={this.handleSubmit}>
                    <span>Digite o ID para procurar</span>
                    <input type="text" name="id" onChange={this.handleChange} value={this.state.id}></input>
                    <button className="btn-procurar" type="submit"> Procurar</button>
                    </form>
                    <div>
                        <span>O nome que vc procurou é : {this.state.name} </span>
                    </div>
            </div>
        );
    }
}
