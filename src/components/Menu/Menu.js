import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div>
            <div className="container-menu">
            <div>
                <h1 className="h1-menu">CONTATOS - PROVA</h1>
                </div>
            </div>
            <div className="section-menu">
                <Link to="/porid"><button>SHOW</button></Link>
                <Link to="/tabela"><button>INDEX</button></Link>
                <Link to="/"><button>CREATE</button></Link>
                <Link to="/delete"><button>DELETE</button></Link>
                <Link to="/update"><button>UPDATE</button></Link>
            </div>
            </div>
    )
}