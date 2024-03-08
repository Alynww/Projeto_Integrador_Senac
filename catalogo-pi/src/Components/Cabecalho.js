import Link from "next/link";

export default function Cabecalho(props){
    return(
        <div>
            <nav>
            <div class="containerr">
                <input type="checkbox" id="checkbox"></input>
                <label for="checkbox"><img src="/assets/menu1.svg" alt=""></img></label>
                <div class="content">
                    <hr></hr>
                    <li className="catalogoo"><Link href="/">CATÁLOGO</Link></li>
                    <hr></hr>
                    <li className="cadastrar"><Link href="/cadastro">CADASTRAR</Link></li>
                    <hr></hr>
                </div>
             </div>
                <li className="logo">Pedras Exuberantes</li>
                <div class="pesquisa2">
                    <input type="text" placeholder="Procurar..." onChange={props.pesquisar}></input>
                    <img src="/assets/magnifying-glass.png" alt=""></img>
                </div>
            </nav>
        </div>
    )
};