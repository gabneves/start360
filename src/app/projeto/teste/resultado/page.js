"use client";
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';

export default function Resultado() {
    const searchParams = useSearchParams();
    const nomeProjeto = searchParams.get('nomeProjeto');
    const empresa = searchParams.get('empresa');
    const resposta = searchParams.get('resposta');
    
    // Parseia o JSON de resposta para exibir como tabela
    const jsonResponse = JSON.parse(decodeURIComponent(resposta));

    const handleDownload = () => {
        console.log("Download do planejamento");
    };

    const handleConcluir = () => {
        console.log("Planejamento concluído");
    };

    const handleAjustar = () => {
        console.log("Ajustando planejamento");
    };

    // Função para renderizar o orçamento como tabela
    const renderTable = (obj) => {
        return Object.keys(obj).map((key) => {
            const value = obj[key];
            return (
                <tr key={key}>
                    <td><strong>{key}:</strong></td>
                    <td>{typeof value === 'object' ? renderTable(value) : value.toString()}</td>
                </tr>
            );
        });
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
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <tbody>
                            {renderTable(jsonResponse.orcamento)}
                        </tbody>
                    </table>
                </div>
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