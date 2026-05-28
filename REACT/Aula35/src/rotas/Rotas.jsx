import {Routes, Route } from 'react-router-dom'

import Home from '../paginas/Home'
import Produtos from '../paginas/Produtos'
import DetalheProduto from '../paginas/DetalheProduto'
import PaginaNaoEncontrada from '../paginas/PaginaNaoEncontrada'

export default function Rotas() {
    return (

        <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/produtos' element={<Produtos />} />
            <Route path='/produtos/:id' element={<DetalheProduto />} />
            <Route path='*' element={<PaginaNaoEncontrada />} />
        </Routes>
    )
}