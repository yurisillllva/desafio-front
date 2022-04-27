import React from 'react';

import './styles.css';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

//http://localhost:3000/products

export default function App() {
    return (
      <div className="app">
          <Routes/>
          <ToastContainer autoClose={4000} />
      </div>
    );

  }

