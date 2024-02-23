import Image from "next/image"

export default function Produto(){
    return(
    <main>
        <nav>
            <p>Home</p>
            <p>Catalogo</p>
        </nav>

        <section className="catalogo">

            <Image className="teste" src={"/assets/samsung.jpg"}  width={200} height={250} />

            <p>Smartphone Samsung Galaxy A54 5G 128GB 8GB RAM Tela 6.4'' Câmera Tripla de até 50MP + Selfie 32MP - Branco</p>

            <h2>R$2000,00</h2>

            <input id="txtNovidade" type="checkbox" />
            <label for="txtNovidade">Novidade</label>

            <input id="txtDisponivel" type="checkbox" />
            <label for="txtDisponivel">Disponível</label>

        </section>

        <section className="catalogo">

            <Image className="teste" src={"/assets/xiaomi.jpg"}  width={200} height={250} />

            <p>Smartphone Samsung Galaxy A54 5G 128GB 8GB RAM Tela 6.4'' Câmera Tripla de até 50MP + Selfie 32MP - Branco</p>

            <h2>R$2000,00</h2>

            <input id="txtNovidade" type="checkbox" />
            <label for="txtNovidade">Novidade</label>

            <input id="txtDisponivel" type="checkbox" />
            <label for="txtDisponivel">Disponível</label>

        </section>

    </main>
    )
}