import Cabecalho from "@/Components/Cabecalho";
import CustomCheckbox from "@/Components/CustomCheckbox";
import CustomInputLabel from "@/Components/CustomInputLabel";
import CustomTextAreaLabel from "@/Components/CustomTextAreaLabel";
import Footer from "@/Components/Footer";
import axios from "axios";
import { useState } from "react";

export default function cadastro(){

    const [dadosProduto, setDadosProduto] = useState({
        id : 0,
        nome : "",
        descricao : "",
        preco: 0,
        novidade: false,
        disponivel: false
    })

    function handleSalvar(){
        //Enviaremos o post para a API
        dadosProduto.preco = dadosProduto.preco.replace(".", "");
        dadosProduto.preco = dadosProduto.preco.replace(",", ".");
        axios.post('https://localhost:7231/api/Produto', dadosProduto)
            .then(res => console.log(res))
            alert("Deu certo");
    }

    function handleChange(e){
        console.log(e.target.value)
        console.log(e.target.id)
        
        if(e.target.type == "checkbox"){
            dadosProduto[e.target.id] = e.target.checked
        }else{
            dadosProduto[e.target.id] = e.target.value
        }
        
        setDadosProduto(dadosProduto)

        console.log(dadosProduto)
    }

    return(
        <>
        
        <Cabecalho />
        <div className="container-fluid">
            <div className="row">
                <CustomInputLabel id="nome" onChange={handleChange} texto="Nome" col="8" />
                <CustomInputLabel id="preco" onChange={handleChange} texto="Preço" col="4" />
                <CustomTextAreaLabel id="descricao" onChange={handleChange} texto="Descrição" col="12" />
                <CustomInputLabel id="imagem" onChange={handleChange} texto="URL da Imagem" col="12" />
                <CustomCheckbox id="disponivel" onChange={handleChange} texto="Disponível" col="6"/>
                <CustomCheckbox id="novidade" onChange={handleChange} texto="Novidade" col="6"/>
            </div>
                <div className="row">
                    <div className="col-12 text-center">
                    <button className="btn btn-primary" onClick={handleSalvar}>Salvar</button>
                </div>
            </div>
        </div>
        <Footer/>

        </>
    )
}