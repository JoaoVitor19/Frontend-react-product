import React, { Component } from 'react';

export default class TableU extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.nome}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.telefone}
                </td>
                <td>
                    {this.props.obj.senha}
                </td>
            </tr>
        );
    }
}