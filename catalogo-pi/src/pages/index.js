import Cabecalho from "@/Components/Cabecalho";
import Footer from "@/Components/Footer";
import Produto from "@/Components/Produto";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {

  const [listaProduto, setListaProduto] = useState([])
  const [listaProdutoFiltrado, setListaProdutoFiltrado] = useState([])

    useEffect(() => {
      axios.get('https://localhost:7231/api/Produto/ListaAsync').then((res) => {
        setListaProduto(res.data);
        setListaProdutoFiltrado(res.data);
      });
  }, []);

  function hadlePesquisar(filtro){
    const valorFiltrado = filtro.target.value

    const filtrado = listaProduto.filter((dado) =>  
    dado.nome.toLowerCase().includes(valorFiltrado.toLowerCase()))

    setListaProdutoFiltrado(filtrado)

    console.log(filtro)
  }

  return (
       <div>
        
        <Cabecalho pesquisar={hadlePesquisar}/>

          <main className="certo">
            <section>
              {
                listaProdutoFiltrado.map((dado, index) => <Produto
                 key={index}
                 nome={dado.nome}
                 disponivel={dado.disponivel}
                 novidade={dado.novidade}
                 preco={dado.preco}
                 imagem={dado.imagem}
                 />)
              }
            </section>
          </main>

        <Footer/>

       </div>
  );
}
