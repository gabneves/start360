import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import {
    Button,
    Container,
    Grid,
    Typography,
    Input
} from "@mui/material";

export default function Contato() {
    return (
            <Container className={styles.container} maxWidth="">
                <Grid container spacing={10} className={styles.gridContainer}>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h3" gutterBottom className={styles.titleLeft}>
                            Contato
                        </Typography>
                        <Typography variant="body1" paragraph className={styles.textLeft}>
                            Gostou do projeto?
                        </Typography>
                        <Typography variant="body1" paragraph className={styles.textLeft}>
                            Quer colaborar com sugestões, críticas ou elogios?
                            Escreve para a gente!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Grid container spacing={2} className={styles.gridContainerForm}>
                            <Grid item xs={12}>
                                <Input type="text" fullWidth placeholder="nome" className={styles.input} />
                            </Grid>
                            <Grid item xs={12}>
                                <Input type="email" fullWidth placeholder="e-mail" className={styles.input} />
                            </Grid>
                            <Grid item xs={12}>
                                <Input type="text" fullWidth placeholder="comentários:" className={styles.input} />
                            </Grid>
                            <Grid item xs={12} className={styles.buttonContainerForm}>
                                <Button className={styles.button} variant="contained">
                                    enviar
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
    );
}
