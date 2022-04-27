import React from 'react'; 

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';
import {toast} from 'react-toastify';

export default function Favoritos(){
    const [produtos, setProdutos] = useState([]);

    useEffect(()=>{

        const minhaLista = localStorage.getItem('produtos');
        setProdutos(JSON.parse(minhaLista) || []);

    }, []);

    function handleDelete(id){
       let filtrosProdutos = produtos.filter((item)=> {
           return (item.id !== id )
       }) 

       setProdutos(filtrosProdutos);
       localStorage.setItem('produtos', JSON.stringify(filtrosProdutos))
       toast.success('Produto excluido com sucesso!');
    }
    
    return(
        <div id="meus-produtos">
            <h1>Produtos Favoritos</h1>

            {produtos.length === 0 && <span>Você não tem produto salvo</span>}

            <ul>
                {produtos.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>

                            <div>
                                <Link to={`/products/${item.id}`}>Ver detalhes</Link>
                                <button onClick={ () => handleDelete(item.id) }>Excluir</button>

                            </div>

                        </li>
                    )
                })}
            </ul>

        </div>
    )
}