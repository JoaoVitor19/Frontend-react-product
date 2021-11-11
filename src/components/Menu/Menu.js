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
                <Link to="/delete">DELETE</Link>
                <Link to="/update">UPDATE</Link>
            </div>
        </div>
    )
}