import React from 'react';
import Menu from "../../components/Menu/Menu"
import axios from 'axios'
import './PorId.css'

export default class PorId extends React.Component {

    state = {
        id: 0,
        nome: '',
        email: '',
        telefone: '',
        senha:'' ,
    }

    onChange = e => {
        this.setState({ id: e.target.value })
    }

    onChangeName(e) {
        this.setState({ nome: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeTelefone(e) {
        this.setState({ telefone: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.get(`http://localhost:8080/usuario/${this.state.id}`)
            .then(res => {
                console.log(res);
                alert(res.data.email);
                alert(res.data.telefone);
    });
}
    render(){
        return (
            <div>
                <Menu />
                    <form className="container-porid" onSubmit={this.handleSubmit}>
                    <span>Digite o ID para procurar</span>
                    <input type="text" name="id" onChange={this.onChange} value={this.state.id}></input>
                    <button className="btn-procurar" type="submit"> Procurar</button>
                    </form>
            </div>
        );
    }
}
