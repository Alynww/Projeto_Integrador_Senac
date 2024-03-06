import Cabecalho from "@/Components/Cabecalho";
import Footer from "@/Components/Footer";
import Produto from "@/Components/Produto";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {

  const [listaProduto, setListaProduto] = useState([])

    useEffect(() => {
      axios
      .get('https://localhost:7231/api/Produto/ListaAsync')
      .then(resp => setListaProduto(resp.data))
  }, []);

  return (
       <div>

        <Cabecalho/>
          <section>
            {
              listaProduto.map((dado, index) => <Produto
               key={index}
               nome={dado.nome}
               disponivel={dado.disponivel}
               novidade={dado.novidade}
               preco={dado.preco}
               imagem={dado.imagem}
               />)
            }
          </section>

        <Footer/>
       </div>
  );
}
