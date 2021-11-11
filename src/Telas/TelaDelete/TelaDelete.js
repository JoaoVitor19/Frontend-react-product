import React, { Component } from 'react';
import axios from 'axios';
import Menu from '../../components/Menu/Menu'
import './TelaDelete.css'

export default class TelaDelete extends Component {
    state = {
        id: 0
    }

    onChangeId = e => {
        this.setState({ id: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
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
                    <form className="table-container" onSubmit={this.onSubmit}>
                        <span>Apague por id</span>
                        <input type="text" name="id" onChange={this.onChangeId} />
                        <button type="submit">Deletar</button>
                    </form>
                </div>
            </div>
        );
    }
};