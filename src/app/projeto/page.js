import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import {
    Button,
    Container,
    Grid,
    Typography,
} from "@mui/material";

export default function Projeto() {
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
                            <Button className={styles.button} variant="contained" sx={{ mt: 3 }}>
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
                            layout="responsive"
                        />
                    </Grid>
                </Grid>
            </Container>
    );
}
