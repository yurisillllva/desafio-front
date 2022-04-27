import React from 'react';

import { useEffect, useState } from 'react';
import './home.css';
import api from  '../../services/api';
import { Link } from 'react-router-dom'; 


export default function Home() {
  const [produtos, setProducts] = useState([]);
  
    useEffect(()=>{

      async function loadProducts(){
        const response = await api.get('http://localhost:3000/products')
        //console.log(response);
        setProducts(response.data);
      }

      loadProducts();
    
    }, []);

    return (
      <div className="container">
        <div className="lista-produtos">
          {produtos.map((produto)=>{
            return(
              <article key={produto.id}>
                <strong>{produto.title}</strong>
                <strong>{produto.category}</strong>
                <img src={produto.image} alt={produto.title} />
                <Link to="/">Mais Detalhes</Link>
              </article>
            )
          })}
        </div>
      </div>
    );
  }