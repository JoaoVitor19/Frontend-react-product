import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div>
            <div className="container-menu">
            <div>
                <h1 className="h1-menu">FRONTEND PROVA</h1>
                </div>
            </div>
            <div className="section-menu">
                <Link to="/porid">SHOW</Link>
                <Link to="/tabela">INDEX</Link>
                <Link to="/">CREATE</Link>
                <h1>DELETE</h1>
                <h1>UPDATE</h1>
            </div>
        </div>
    )
}