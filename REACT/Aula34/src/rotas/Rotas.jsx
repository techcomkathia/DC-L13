import {Routes, Route} from 'react-router-dom' //permite a criação de rotas, configuração para o roteamento, não é necessesariamente o componente que mostra os links

import Home from '../paginas/Home'
import Contato from '../paginas/Contato'
import Sobre from '../paginas/Sobre'
//importação de todas as páginas para serem usadas nas rotas

export default function Rotas() {
    /*o componente Routes permite a criação de rotas e agrupa o componente Route, que é o responsável por configurar o roteamento
    //route recebe dois atributos: path, que é o caminho da rota, e element, que é o componente a ser renderizado quando a rota for acessada*/
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
        </Routes>
    )


}