import './Cadastro.css';
import React from 'react'
import Menu from '../../components/Menu/Menu'
import axios from 'axios';

export default class FormCriar extends React.Component {

    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTelefone = this.onChangeTelefone.bind(this);
        this.onChangeSenha = this.onChangeSenha.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nome: '',
            email: '',
            telefone: '',
            senha:'' ,
        }
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
            nome: this.state.nome,
            email: this.state.email,
            telefone: this.state.telefone,
            senha: this.state.senha,
        };

        axios.post('http://localhost:8080/usuario', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ nome: '', email: '' , telefone: '', senha: '' })
    }
    render() {
        return (
            <div>
                <Menu />
                    <form className="form-criar box-form" onSubmit={this.onSubmit}>
                        <h1>Criar Cadastro</h1>
                            <span>Username lowercase</span>
                            <input
                                name="User"
                                type="text"
                                pattern="[a-z]{1,15}"
                                value={this.state.nome}
                                onChange={this.onChangeName} required></input>
                            <span>Seu Email</span>
                            <input
                                name="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.onChangeEmail} required></input>
                            <span>Seu Telefone</span>
                            <input
                                name="telefone"
                                type="tel"
                                pattern="[1-9]{1,12}"
                                value={this.state.telefone}
                                onChange={this.onChangeTelefone} required></input>
                            <span>Sua Senha</span>
                            <input
                                name="senha"
                                type="password"
                                value={this.state.senha}
                                onChange={this.onChangeSenha} required></input>
                        <button className="btn-criar" type="submit" > CREATE </button>
                    </form>
                </div>
        );
    }
}
