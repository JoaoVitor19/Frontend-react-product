import React from 'react';
import axios from 'axios';
import Menu from '../../components/Menu/Menu';

export default class UpdateTela extends React.Component {

    constructor(props) {
        super(props)

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTelefone = this.onChangeTelefone.bind(this);
        this.onChangeSenha = this.onChangeSenha.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: 0,
            nome: '',
            email: '',
            telefone: '',
            senha:'' ,
        }
    }

    onChangeId (e){
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

    onChangeSenha(e) {
        this.setState({ senha: e.target.value })
    }

    onSubmit(e) {
        const userObject = {
            id: this.state.id,
            nome: this.state.nome,
            email: this.state.email,
            telefone: this.state.telefone,
            senha: this.state.senha,
        };

        e.preventDefault();
        axios.put(`http://localhost:8080/usuario/${this.state.id}`, userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ id: 0, nome: '', email: '' , telefone: '', senha: '' })
    }

    render() {
        return (
            <div>
                <Menu />
                <div>
                    <form className="form-criar box-form" onSubmit={this.onSubmit}>
                        <h1>Alterar Cadastro</h1>
                        <span>O id a ser alterado</span>
                        <input
                            name="id"
                            type="text"
                            value={this.state.id}
                            onChange={this.onChangeId} required></input>
                        <span>Seu Nome</span>
                        <input
                            name="nome"
                            type="text"
                            value={this.state.nome}
                            onChange={this.onChangeName} required></input>
                        <span>Seu Email</span>
                        <input
                            name="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.onChangeEmail} required></input>
                        <span>Seu Telefone</span>
                        <input
                            name="telefone"
                            type="tel"
                            value={this.state.telefone}
                            onChange={this.onChangeTelefone} required></input>
                        <span>Sua Senha</span>
                        <input
                            name="senha"
                            type="text"
                            value={this.state.senha}
                            onChange={this.onChangeSenha} required></input>
                        <button className="btn-criar" type="submit" > Alterar </button>
                    </form>
                </div>

            </div>
        )
    }
}