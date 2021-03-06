import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom'

import './style.css'

import { FiLogIn } from 'react-icons/fi'

import heroesImg from '../../asset/heroes.png';

import logoImg from '../../asset/logo.svg';
import api from '../../services/api';


export default function Logon(){

    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{

            const response = await api.post('/sessions',{ id });
        
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        }catch{
            alert('Falha no login, tente novamente.');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the heroes"/>

                <form onSubmit={handleLogin}>
                    <h1>
                        Faça seu logon
                    </h1>
                    <input 
                        placeholder="Seu ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>
                    
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16}  color="#E02041"/>
                        Não tem cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}