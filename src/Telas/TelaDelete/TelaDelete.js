import React, { Component } from 'react';
import axios from 'axios';
import Menu from '../../components/Menu/Menu'

export default class TelaDelete extends Component {
    state = {
        id: 0
    }

    handleChange = event => {
        this.setState({ id: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.delete(`http://localhost:8080/usuario/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    };
    render() {
        return (
            <div>
                <Menu />
                <div>
                    <form className="table-container" onSubmit={this.handleSubmit}>
                        <span>Apague por id</span>
                        <input type="text" name="id" onChange={this.handleChange} />
                        <button type="submit">Deletar</button>
                    </form>
                </div>
            </div>
        );
    }
};