"use client";
import { useState } from "react";
import "@/app/globals.css";
import "@/app/treinamento/treinamento.css";

export default function(){

const [treinamentos, setTreinamentos] = useState([
    
    {
        id: 1,
        titulo: "Como criar um canal no Youtube",
        descricao: "Você vai aprender a como criar um canal do youtube",
        duracao: "3h",
        categoria: "Inicio"
    },
    {
        id: 2,
        titulo: "Aprenda a escolher nichos no youtube",
        descricao: "Nicho é a parte mais importante de um canal e aqui você vai aprender a como fazer isso",
        duracao: "3h",
        categoria: "Nichos"
    },
    {
        id: 3,
        titulo: "Como achar videos virais do seu nicho",
        descricao: "Aqui você vai aprender a como escolher os melhores vídeos com base em seu nicho",
        duracao: "3h",
        categoria: "Nichos"
    }
]);

    return (
        <>

      
            <h1>Treinamentos Para Criadores</h1>
            
                
            <section className="card" style={{ maxWidth: 320 }}>
                <img src="..." className="card-img-top" alt="..." />
                {
                    treinamentos.map(treinamento => (
                    <div className="container-card">
                    <div className="card-body" key={treinamento.id}  >
                        <h4 className="card-title">{treinamento.titulo}</h4>
                        <p className="card-text">
                        {treinamento.descricao}
                        </p>
                        <p>Duração do treinamento: {treinamento.duracao}</p>
                        <a href="#" className="btn-solid theme-primary">
                        Entrar
                        </a>
                    </div>
                    </div>
                ))
                }
                
                    
                
                
                
            </section>
                
           

    
        </>
    );


}


