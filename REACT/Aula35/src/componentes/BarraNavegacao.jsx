import { Link } from "react-router-dom";

export default function BarraNavegacao() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/produtos'>Produtos</Link></li>
                <li><Link to='/produtos/1'>Detalhe do Produto 1</Link></li>
            </ul>
        </nav>
    )
}