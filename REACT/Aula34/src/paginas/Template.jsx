//por responsabilidade sempre mostrar o header e o footer, e o conteudo do meio muda de acordo com a rota

import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

export default function Template(props) {
    return (
        <div>
            <Header />
            <div >
               {props.children} 
            </div>
            
            <Footer />
        </div>
    );
}


/*

<Template>
    componentes de páginas que serão renderizados dentro do template, ou seja, entre o header e o footer, e o conteúdo do meio muda de acordo com a rota
</Template>


*/