import React, { Component } from 'react';
import axios from 'axios';
import TableU from '../../components/Table/Table';
import Menu from '../../components/Menu/Menu'
import './TabelaCadastro.css'

export default class TabelaCadastro extends Component {

    constructor(props) {
        super(props);
        this.state = { usuarioCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/usuario')
            .then(res => {
                this.setState({ usuarioCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dadosTabela() {
        return this.state.usuarioCollection.map((data, i) => {
            return <TableU obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <Menu />
            <div className="">
                <div className="container">
                    <table className="table-container">
                        <thead className="table-thread">
                            <tr className="tabletr">
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Telefone</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dadosTabela()}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}