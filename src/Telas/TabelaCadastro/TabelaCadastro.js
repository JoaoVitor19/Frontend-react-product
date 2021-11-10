import "./TabelaCadastro.css"
import Menu from "../../components/Menu/Menu"
import axios from 'axios';

export default function TabelaCadastro() {

    return (
        <div>
            <Menu />
            <table className="table-frontend">
                <caption className="text-g">Minha Tabela Produtos</caption>
                <thead>
                    <tr className="table1">
                        <th>Usuario</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Senha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table1">
                            <td>nome</td>
                            <td>nome</td>
                            <td>nome</td>
                            <td>nome</td>
                        </tr>
                </tbody>
            </table>
        </div>
    );
}
