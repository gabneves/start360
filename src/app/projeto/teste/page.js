"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Teste() {
    const [formData, setFormData] = useState({
        nomeProjeto: "",
        email: "",
        telefone: "",
        empresa: "",
        quantParticipantes: "",
        budget: "",
        descricao: ""
    });

    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { descricao, nomeProjeto, empresa } = formData;
        axios.post("http://127.0.0.1:5000/orcamento", { descricao })
            .then(response => {
                // Sucesso: Redireciona para a tela de resultados passando os dados na URL
                router.push(`/projeto/teste/resultado?nomeProjeto=${nomeProjeto}&empresa=${empresa}&resposta=${encodeURIComponent(JSON.stringify(response.data))}`);

            })
            .catch(error => {
                console.error("There was an error submitting the form!", error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <h1 className={styles.titleLeft}>Planeje seu evento com a Start 360</h1>
            <p className={styles.textLeft}>
                Preencha o formulário abaixo para que a Start 360 possa criar um planejamento completo e personalizado para o seu evento corporativo. Nossa inteligência artificial cuidará de todos os detalhes, desde a logística até os orçamentos, conectando-se diretamente com os fornecedores. Eficiência, precisão e rapidez para garantir o sucesso do seu evento!
            </p>
            <div className={styles.gridContainer}>
                <input
                    type="text"
                    name="nomeProjeto"
                    placeholder="Nome do projeto"
                    value={formData.nomeProjeto}
                    onChange={handleChange}
                    className={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                />
                <input
                    type="text"
                    name="telefone"
                    placeholder="Telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className={styles.input}
                />
                <input
                    type="text"
                    name="empresa"
                    placeholder="Empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className={styles.input}
                />
                <input
                    type="number"
                    name="quantParticipantes"
                    placeholder="Quantia de participantes"
                    value={formData.quantParticipantes}
                    onChange={handleChange}
                    className={styles.input}
                />
                <input
                    type="text"
                    name="budget"
                    placeholder="Budget previsto (opcional)"
                    value={formData.budget}
                    onChange={handleChange}
                    className={styles.input}
                />
            </div>
            <textarea
                name="descricao"
                placeholder="Descrição do projeto"
                value={formData.descricao}
                onChange={handleChange}
                className={styles.textArea}
            />
            <div className={styles.buttonContainerForm}>
                <button type="button" className={styles.button}>
                    Download do modelo
                </button>
                <button type="button" className={styles.button}>
                    Upload do modelo preenchido
                </button>
                <button type="submit" className={styles.button}>
                    Testar
                </button>
            </div>
        </form>
    );
}