import Link from "next/link";

export default function Cabecalho(props){
    return(
        <div>
            <nav>
            <div class="containerr">
                <input type="checkbox" id="checkbox"></input>
                <label for="checkbox"><img src="/assets/menu1.svg" alt=""></img></label>
                <div class="content">
                    <li className="catalogoo"><Link href="/">CATÁLOGO</Link></li>
                    <li className="cadastrar"><Link href="/cadastro">CADASTRAR</Link></li>
                </div>
             </div>
                <li className="logo">Pedras Exuberantes</li>
                <div class="pesquisa3">
                    <input type="checkbox" id="procurarPesquisa" className="procurar"></input>
                    <label for="procurarPesquisa" className="icon-pesquisa"><img src="/assets/magnifying-glass.png" alt=""/></label>
                    <input className="procurar-input" id="procurarInput" placeholder="Procurar..."  onChange={props.pesquisar}/>
                </div>
            </nav>
        </div>
    )
};