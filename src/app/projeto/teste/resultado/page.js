"use client";
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';

export default function Resultado() {
    const searchParams = useSearchParams();
    const nomeProjeto = searchParams.get('nomeProjeto');
    const empresa = searchParams.get('empresa');
    const resposta = searchParams.get('resposta');

    const handleDownload = () => {
        // Adicione a lógica para download aqui
        console.log("Download do planejamento");
    };

    const handleConcluir = () => {
        // Adicione a lógica para concluir aqui
        console.log("Planejamento concluído");
    };

    const handleAjustar = () => {
        // Adicione a lógica para ajustar aqui
        console.log("Ajustando planejamento");
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.titleLeft}>Resultado do Planejamento</h1>
            <p className={styles.textLeft}>
                Abaixo estão os detalhes do seu planejamento. Revise as informações e entre em contato se precisar de ajustes.
            </p>
            <div className={styles.gridContainer}>
                <input
                    type="text"
                    name="nomeProjeto"
                    placeholder="Nome do projeto"
                    value={nomeProjeto}
                    readOnly
                    className={styles.input}
                />
                <input
                    type="text"
                    name="empresa"
                    placeholder="Empresa"
                    value={empresa}
                    readOnly
                    className={styles.input}
                />
                <textarea
                    name="resposta"
                    placeholder="Resposta da API"
                    value={resposta}
                    readOnly
                    className={styles.textArea}
                />
            </div>
            <div className={styles.buttonContainerForm}>
                <button type="button" className={`${styles.button} ${styles.adjustButton}`} onClick={handleAjustar}>
                    Ajustar
                </button>
                <button type="button" className={`${styles.button} ${styles.downloadButton}`} onClick={handleDownload}>
                    Download
                </button>
                <button type="button" className={`${styles.button} ${styles.concludeButton}`} onClick={handleConcluir}>
                    Concluir
                </button>
            </div>
        </div>
    );
}
