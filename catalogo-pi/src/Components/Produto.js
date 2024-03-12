import Image from "next/image"

export default function Produto(props){
    return(
    <div> 
            <section>
                <section className="categoria">

                    <div className="produtos">
                    <img src={props.imagem} alt="" />
                    
                    <div className="separar">
                            {
                                props.disponivel == false
                                    ? <h2 className="disponivel">Disponível</h2>
                                    : null
                            }
                            {
                                props.novidade == true
                                    ? <h2 className="novidade">Novidade</h2>
                                    : null
                            }
                        </div>
                        <h1>{props.nome}</h1>
                        <h1 className="preco">{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(props.preco)}</h1>
                       
                    </div> 

                </section>
            </section>
    </div>
    )
}