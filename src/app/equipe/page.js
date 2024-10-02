import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import { Container, Grid, Typography, CardContent, Link } from "@mui/material";

const membros = [
    {
        id: 1,
        nome: "Membro 1",
        imagem: "/assets/members/Sampaio.svg",
        github: "https://github.com/gabrielsampaiog",
        email: "gsampaio@projetotaqui.com.br",
        linkedin: "https://www.linkedin.com/in/gabrielsampaiogianini/",
    },
    {
        id: 2,
        nome: "Membro 2",
        imagem: "/assets/members/Neves.svg",
        github: "https://github.com/Neveszera",
        email: "gneves@projetotaqui.com.br",
        linkedin: "https://www.linkedin.com/in/-gabriel-neves",
    },
    {
        id: 3,
        nome: "Membro 3",
        imagem: "/assets/members/Livia.svg",
        github: "https://github.com/freitaslivia",
        email: "livia@projetotaqui.com.br",
        linkedin: "https://www.linkedin.com/in/l%C3%ADvia-freitas-ferreira/",
    },
    {
        id: 4,
        nome: "Membro 4",
        imagem: "/assets/members/luiz.svg",
        github: "https://github.com/luizPrendin",
        email: "luizprendinfelipe@gmail.com",
        linkedin: "https://www.linkedin.com/in/luizprendin/?originalSubdomain=br",
    },
    {
        id: 5,
        nome: "Membro 5",
        imagem: "/assets/members/Renato.svg",
        github: "https://github.com/RenatoRussano",
        email: "renato@projetotaqui.com.br",
        linkedin: "https://www.linkedin.com/in/renato-russano-706423a3/",
    },
];

export default function Equipe() {
    return (
            <Container className={styles.container} maxWidth="lg">
                <Typography variant="h3" align="left" gutterBottom className={styles.title}>
                    A equipe
                </Typography>
                <Typography variant="body1" align="left" paragraph className={styles.text}>
                    A Start 360 organiza um evento considerando um texto fornecido por você e algumas outras poucas informações.
                </Typography>
                <Grid container spacing={4}>
                    {membros.map((membro) => (
                        <Grid item key={membro.id} xs={12} sm={6} md={4} lg={2.4}>
                            <CardContent className={styles.cardContent}>
                                <Image src={membro.imagem} alt={membro.nome} width={209} height={308} />
                                <div className={styles.iconBackground}>
                                    <Link href={`mailto:${membro.email}`} target="_blank">
                                        <img className={styles.icon} src="/assets/icons/emailMember.svg" alt="Ícone E-mail" />
                                    </Link>
                                    <Link href={membro.github} target="_blank">
                                        <img className={styles.icon} src="/assets/icons/githubMember.svg" alt="Ícone GitHub" />
                                    </Link>
                                    <Link href={membro.linkedin} target="_blank">
                                        <img className={styles.icon} src="/assets/icons/linkedin.svg" alt="Ícone LinkedIn" />
                                    </Link>
                                </div>
                            </CardContent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
    );
}
