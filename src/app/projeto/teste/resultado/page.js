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

    // Função para formatar os valores como R$
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    // Cálculo do valor total
    const totalOrcamento = formatCurrency(jsonResponse.orcamento.total_orcamento);

    const handleDownload = () => {
        console.log("Download do planejamento");
    };

    const handleConcluir = () => {
        console.log("Planejamento concluído");
    };

    const handleAjustar = () => {
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

                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <tbody>
                            {/* Seção Alimentação */}
                            <tr>
                                <th colSpan="2">Alimentação</th>
                            </tr>
                            <tr>
                                <td>Custo Bebidas:</td>
                                <td>{formatCurrency(jsonResponse.orcamento.alimentacao.custo_bebidas)}</td>
                            </tr>
                            <tr>
                                <td>Custo Coffee Break:</td>
                                <td>{formatCurrency(jsonResponse.orcamento.alimentacao.custo_coffee_break)}</td>
                            </tr>
                            <tr>
                                <td>Detalhes:</td>
                                <td>{jsonResponse.orcamento.alimentacao.detalhes}</td>
                            </tr>

                            {/* Seção Hospedagem */}
                            <tr>
                                <th colSpan="2">Hospedagem</th>
                            </tr>
                            <tr>
                                <td>Custo Total Hospedagem:</td>
                                <td>{formatCurrency(jsonResponse.orcamento.hospedagem.custo_total_hospedagem)}</td>
                            </tr>
                            <tr>
                                <td>Detalhes:</td>
                                <td>{jsonResponse.orcamento.hospedagem.detalhes}</td>
                            </tr>
                            <tr>
                                <td>Hotel:</td>
                                <td>{jsonResponse.orcamento.hospedagem.hotel}</td>
                            </tr>

                            {/* Seção Staff */}
                            <tr>
                                <th colSpan="2">Staff</th>
                            </tr>
                            <tr>
                                <td>Custo Total Staff:</td>
                                <td>{formatCurrency(jsonResponse.orcamento.staff.custo_total_staff)}</td>
                            </tr>
                            <tr>
                                <td>Detalhes:</td>
                                <td>{jsonResponse.orcamento.staff.detalhes}</td>
                            </tr>

                            {/* Seção Transporte */}
                            <tr>
                                <th colSpan="2">Transporte</th>
                            </tr>
                            <tr>
                                <td>Custo Aéreo:</td>
                                <td>{formatCurrency(jsonResponse.orcamento.transporte.custo_aereo)}</td>
                            </tr>
                            <tr>
                                <td>Custo Ônibus:</td>
                                <td>{formatCurrency(jsonResponse.orcamento.transporte.custo_onibus)}</td>
                            </tr>
                            <tr>
                                <td>Detalhes:</td>
                                <td>{jsonResponse.orcamento.transporte.detalhes}</td>
                            </tr>

                            {/* Total do Orçamento */}
                            <tr>
                                <th>Total Orçamento:</th>
                                <td>{totalOrcamento}</td>
                            </tr>
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
