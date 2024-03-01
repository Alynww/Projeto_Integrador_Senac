import Cabecalho from "@/Components/Cabecalho";
import CustomCheckbox from "@/Components/CustomCheckbox";
import CustomInputLabel from "@/Components/CustomInputLabel";
import CustomTextAreaLabel from "@/Components/CustomTextAreaLabel";
import Footer from "@/Components/Footer";
import axios from "axios";
import { useState } from "react";

export default function cadastro(){

    const [dadosProduto, setDadosProduto] = useState({})

    function handleSalvar(){
        //Enviaremos o post para a API
        axios.post('https://localhost:7231/api/Produto', dadosProduto)
            .then(res => console.log(res))
    }

    return(
        <>
        
        <Cabecalho />
        <div className="container-fluid">
            <div className="row">
                <CustomInputLabel id="nome" texto="Nome" col="8" />
                <CustomInputLabel id="preco" texto="Preço" col="4" />
                <CustomTextAreaLabel id="descricao" texto="Descrição" col="12" />
                <CustomInputLabel id="imagem" texto="URL da Imagem" col="12" />
                <CustomCheckbox id="disponivel" texto="Disponível" col="6"/>
                <CustomCheckbox id="novidade" texto="Novidade" col="6"/>
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