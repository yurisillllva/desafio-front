import React from "react";
import {useEffect, useState} from 'react';

import './product-info.css';
import { useParams, useHistory } from "react-router-dom";
import api from "../../services/api";

export default function Product(){
    const { id  } = useParams();
    const history = useHistory();

    const [produto, setProduto] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function loadProducts(){
            const response = await api.get(`http://localhost:3000/products/${id}`)

            if(response.data.length === 0){
                //tentando acessar produto inexistente
                history.replace('/');
                return;
            }

            //console.log(response.data);
            setProduto(response.data);
            setLoading(false);
        }

        loadProducts();

        return () => {
            console.log('Componente desmontado')
        }

    }, [history, id]);

    if(loading){
        return(
            <div className="produto-info">
                <h1>Carrregando seu produto...</h1>
            </div>
        )
    }

   return( 
    <div className="produto-info">
        <h1> {produto.title} </h1>
        <img src={produto.image} alt={produto.title} />
        <h3>Descrição</h3>
        {produto.description}
        <h2>Preço</h2>
        {produto.price}

        <div className="botao">
            <button onClick={()=>{}}>Salvar</button>
        </div>

    </div>
   ) 
}
