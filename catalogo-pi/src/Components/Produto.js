import Image from "next/image"

export default function Produto(props){
    return(
        <div>
            <nav>
                <p>CATÁLOGO DE SMARTPHONE</p>
            </nav>
            
        <main>
            <section className="catalogo">
                <Image className="imagem" src={"/assets/samsung.jpg"}  width={200} height={250} />
                <p>{props.Nome}</p>
                <h2>{props.Preco}</h2>

                <div className="separar">
                {
                    props.Dispoinivel == false  
                    ? <h3 className="disponivel">Disponível</h3>
                    : null
                }
                {
                    props.Novidade == true
                    ? <h3 className="novidade">Novidade</h3>
                    : null
                }
                </div>
                
            </section>
        </main>
        </div>
    )
}