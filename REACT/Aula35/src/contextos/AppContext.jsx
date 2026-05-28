//Agrupar todos os contextos em um único arquivo para facilitar a importação e organização dos contextos no projeto
import { ProdutosProvider } from "./ProdutosContext";
import { TemaProvider } from "./TemaContext";


export function AppProvider({children}) {
    return (
        <ProdutosProvider>
            <TemaProvider>
                {children}
            </TemaProvider>
        </ProdutosProvider>
    )
}