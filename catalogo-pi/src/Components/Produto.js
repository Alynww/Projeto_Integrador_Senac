import Image from "next/image"

export default function Produto(props){
    return(
    <div>  
        <main>
            <section>
                <section className="catalogo">
                <div className="card">
                            <p>{props.nome}</p>
                            <h2>R${props.preco},00</h2>
                        </div>
                        <Image className="imagem" src={"/assets/pulseiradeouro.webp"}  width={280} height={280} />
                      
                    <div className="separar">
                    {/* {
                        props.dispoinivel == false
                            ? <h3 className="disponivel">Disponível</h3>
                            : null
                    }
                    {
                        props.novidade == true
                            ? <h3 className="novidade">Novidade</h3>
                            : null
                    } */}
                    </div>
                </section>
            </section>
        </main>
    </div>
    )
}