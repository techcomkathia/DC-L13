//mostrará os links para as outras páginas, e o nome do site
import { Link } from "react-router-dom";

//o Link recarrega o componente sem a necessidade de recarregar toda a página, já a tag A recarrega a página toda, o que não é recomendado para aplicações React, pois perde-se o estado (dados/ variáveis com useState) da aplicação e a performance é prejudicada

//tag a usada para navegação entre sites, e o Link para navegação dentro do mesmo site, ou seja, entre as rotas da aplicação

export default function Header() {
    return (
        <header className="border b-5 border-danger mb-5 p-5 bg-danger">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
            <h1>Site de exemplo</h1>
        </header>
    );
}