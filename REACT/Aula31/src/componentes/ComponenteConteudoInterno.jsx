export default function ComponenteConteudoInterno(props) {

    return(
        <>
            <div className="border border-5 border-danger p-5 m-5 text-center text-danger ">
                <h1>{props.titulo}</h1>
                {props.children}
            </div>
            
        </>
    )
}