import React from "react";
import {useEffect, useState} from 'react';

import './product-info.css';
import { useParams } from "react-router-dom";
import api from "../../services/api";

export default function Product(){
    const { id  } = useParams();
    const [produto, setProduto] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function loadProducts(){
            const response = await api.get(`http://localhost:3000/products/${id}`)
            //console.log(response.data);
            setProduto(response.data);
            setLoading(false);
        }

        loadProducts();

    }, [id]);

    if(loading){
        return(
            <div className="produto-info">
                <h1>Carrregando seu produto...</h1>
            </div>
        )
    }

   return( 
    <div className="produto-info">
        <h1>PAGINA DETALHES - {id} </h1>
    </div>
   ) 
}
