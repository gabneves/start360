"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Corrigido para importar de next/navigation
import styles from "./page.module.css";

import {
    Button,
    Container,
    Grid,
    Typography,
} from "@mui/material";

export default function Projeto() {
    const router = useRouter(); // Usar o hook useRouter

    const handleTesteAgora = () => {
        // Redirecionar para a página de teste
        router.push("/projeto/teste"); // Mantenha a mesma rota
    };

    return (
        <Container className={styles.container} maxWidth="">
            <Grid container spacing={0} className={styles.gridContainerLeft}>
                <Grid item xs={12} md={5} sx={{ mt: 6 }}>
                    <Typography variant="h3" gutterBottom className={styles.titleLeft}>
                        O projeto
                    </Typography>
                    <Typography variant="body1" paragraph className={styles.textLeft}>
                        A Start 360 organiza um evento considerando um texto fornecido por você e algumas outras poucas informações. Com estes dados o sistema é capaz de entender as suas necessidades, estruturar o seu evento, precificar em tempo real com precisão e recomendar serviços complementares. Após os ajustes necessários um consultor entra em contato com você para validar todos os itens.
                    </Typography>
                    <div className={styles.buttonContainerLeft}>
                        <Button 
                            className={styles.button} 
                            variant="contained" 
                            sx={{ mt: 3 }} 
                            onClick={handleTesteAgora} // Adicionar a função de navegação ao onClick
                        >
                            teste agora mesmo
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={7} sx={{ mt: 6 }}>
                    <Image className={styles.img}
                        src="/assets/img/teamwork.png"
                        alt="Phone mockup"
                        width={800}
                        height={800}
                        layout="responsive" />
                </Grid>
            </Grid>
        </Container>
    );
}
