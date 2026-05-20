export default function ComponenteEstiloCondicional(props) {

    return(
        <div>
            {/* para duas opções apenas */}
            <p className={props.classe==='azul'?'normal':'destaque'}>{props.texto}</p>
        </div>
    )
    
    return(
        <div>
            {props.classe==='azul'&& <p className="normal">{props.texto}</p>}
            {props.classe==='vermelho'&& <p className="destaque">{props.texto}</p>}
            {props.classe==='verde'&& <p className="promocao">{props.texto}</p>}
        </div>
    )
}