import Link from "next/link";

export default function Cabecalho(props){
    return(
        <div>
            <nav>
                <li className="logo">Pedras Exuberantes</li>
                <li className="catalogoo"><Link href="/">CATÁLOGO</Link></li>
                <li className="cadastrar"><Link href="/cadastro">CADASTRAR</Link></li>
                <div class="pesquisa2">
                    <input type="text" placeholder="Procurar..." onChange={props.pesquisar}></input>
                    <img src="/assets/magnifying-glass.png" alt=""></img>
                </div>
            </nav>
        </div>
    )
};