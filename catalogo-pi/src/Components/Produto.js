import Image from "next/image"

export default function Produto(props){
    return(
    <div>  
        <main>
            <section>
                <section className="catalogo">
                    <Image className="imagem" src={"/assets/samsung.jpg"}  width={200} height={250} />
                    <p>{props.nome}</p>
                    <h2>{props.preco}</h2>
                    <div className="separar">
                    {
                        props.dispoinivel == false
                            ? <h3 className="disponivel">Disponível</h3>
                            : null
                    }
                    {
                        props.novidade == true
                            ? <h3 className="novidade">Novidade</h3>
                            : null
                    }
                    </div>
                </section>
            </section>
        </main>
    </div>
    )
}