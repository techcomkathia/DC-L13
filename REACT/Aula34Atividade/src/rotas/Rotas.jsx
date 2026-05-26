import {Route, Routes} from 'react-router-dom'

import Home from '../paginas/Home'
import Produtos from '../paginas/Produtos'
import Produto1 from '../paginas/Produto1'
import PaginaNaoEncontrada from '../paginas/PaginaNaoEncontrada'

export default function Rotas() {
    return (
        <Routes>            
            <Route path='/' element={<Home />} />
            <Route path='/produtos' element={<Produtos />} />
            <Route path='/produtos/1' element={<Produto1 />} />
            {/* depois de todas as rotas configuradas, coloque uma rota para quando nenhuma outra for encontrada */}
            <Route path='*' element={<PaginaNaoEncontrada />} />
        </Routes>
    )
}