import Produto from "@/Components/Produto";
import axios from "axios";
import { useState } from "react";


export default function Home() {

  const [listaProduto, setListaProduto] = useState([])

  axios
    .get('https://localhost:7231/api/Produto')
    .then(resp => setListaProduto(resp.data))

  return (
       <div>
        {
          listaProduto.map((dado, index) => <Produto 
           key={index}
           Nome={dado.Nome} 
           Disponivel={dado.Disponivel} 
           Novidade={dado.Novidade} 
           Preco={dado.Preco}
           />)
        }
       </div>
  );
}
