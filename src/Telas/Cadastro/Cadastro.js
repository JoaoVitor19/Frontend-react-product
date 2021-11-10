import './Cadastro.css';
import {React, useState} from 'react'
import Menu from '../../components/Menu/Menu'
import axios from 'axios';

export default function FormCriar() {

        const [formValue, setformValue] = useState({
            nome: '',
            email: '',
            telefone: '',
            senha: '',
        });

        const handleSubmit = async () => {
            const loginFormData = new FormData();
            loginFormData.append("nome", formValue.nome)
            loginFormData.append("email", formValue.email)
            loginFormData.append("telefone", formValue.telefone)
            loginFormData.append("senha", formValue.senha)

            try {
                   await axios({
                    method: "post",
                    url: "http:localhost:8080/usuario",
                    data: loginFormData,
                    headers: { "Content-Type": "application/json" },
                });
            } catch (error) {
                console.log(error)
            }
        }

        const handleChange = (event) => {
            setformValue({
                ...formValue,
                [event.target.name]: event.target.value
            });
        }

        return (
            <div>
                <Menu />
                    <form className="form-criar box-form" onSubmit={handleSubmit}>
                        <h1>Criar Cadastro</h1>
                            <span>Seu Nome</span>
                            <input
                                name="nome"
                                type="text"
                                value={formValue.nome}
                                onChange={handleChange}></input>
                            <span>Seu Email</span>
                            <input
                                name="email"
                                type="text"
                                value={formValue.email}
                                onChange={handleChange}></input>
                            <span>Seu Telefone</span>
                            <input
                                name="telefone"
                                type="tel"
                                value={formValue.telefone}
                                onChange={handleChange}></input>
                            <span>Sua Senha</span>
                            <input
                                name="senha"
                                type="text"
                                value={formValue.senha}
                                onChange={handleChange}></input>
                        <button className="btn-criar" type="Submit"> CREATE </button>
                    </form>
                </div>
        )
    }