"use client"

import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import {
  Button,
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Input
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Home() {
  const [formData, setFormData] = useState({
    nome: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar se os campos estão preenchidos
    if (formData.nome === "" || formData.email === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("https://start360lp-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log("Dados enviados com sucesso!");
      } else {
        console.error("Erro ao enviar dados para o banco de dados.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados para o banco de dados:", error);
    }
  };
  return (
    <>
      <Header />
      <Grid container spacing={0} className={styles.gridContainer}>
        <Grid item xs={12} md={6}>
          <Image className={styles.img}
            src="/assets/img/iphoneApp.svg"
            alt="Phone mockup"
            width={800}
            height={800}
            layout="responsive"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: 14 }} className={styles.gridContainerText}>
          <Typography variant="h3" gutterBottom className={styles.title}>
            O que é a Start 360?
          </Typography>
          <Typography variant="body1" paragraph className={styles.text}>
            Start 360 é uma inteligência artificial capaz de
            construir todos os passos de um evento corporativo
            conforme o texto escrito por você usuário. Através
            de uma série de dados extraídos do seu texto,
            somados ao aprendizado contínuo da IA, o sistema
            é capaz de estruturar, precificar e quantificar todos
            os itens necessários para o seu evento
          </Typography>
          <div className={styles.buttonContainer}>
            <Button className={styles.button} variant="contained" sx={{ mt: 3 }}>
              saiba mais...
            </Button>
          </div>
        </Grid>
      </Grid>

      <Container className={styles.container}>
        <Grid container spacing={0} className={styles.gridContainerLeft}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom className={styles.titleLeft}>
              E como isso funciona?
            </Typography>
            <Typography variant="body1" paragraph className={styles.textLeft}>
              Nosso sistema de gestão de eventos corporativos utiliza inteligência artificial para automatizar e otimizar todo o processo, desde a extração de dados do briefing até a precificação em tempo real. Ao enviar um briefing simples, a IA identifica todas as necessidades do evento, como logística, hospedagem, alimentação, e recursos audiovisuais. Em seguida, gera automaticamente três orçamentos detalhados com opções de menor, médio e maior valor, conectando-se diretamente com fornecedores através de APIs. Isso garante precisão, eficiência e uma experiência excepcional, eliminando a necessidade de semanas de planejamento manual e reduzindo custos significativamente.
            </Typography>
            <div className={styles.buttonContainerLeft}>
              <Button className={styles.button} variant="contained" sx={{ mt: 3 }}>
                teste agora mesmo
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: 6 }}>
            <Image className={styles.img}
              src="/assets/img/team.png"
              alt="Phone mockup"
              width={800}
              height={800}
              layout="responsive"
            />
          </Grid>
        </Grid>


        <Grid container spacing={0} className={styles.gridContainer}>
          <Grid item xs={12} md={6}>
            <Image className={styles.img}
              src="/assets/img/mind.png"
              alt="Phone mockup"
              width={800}
              height={800}
              layout="responsive"
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: 6 }}>
            <Typography variant="h3" gutterBottom className={styles.title}>
              Quanto tempo leva?
            </Typography>
            <Typography variant="body1" paragraph className={styles.text}>
              Dependendo da quantidade de informações fornecidas, o sistema pode levar entre segundos ou poucos minutos para processar todos os dados. Quanto mais completo o briefing, mais rapidamente a IA entende o seu evento e apresenta resultados precisos. Por exemplo, para um evento com 600 pessoas de diversos estados se deslocando para um hotel no interior de São Paulo, o sistema vai processar toda a logística necessária com base na lista de localidades fornecida por você, construindo uma logística que inclui tempo de espera entre voos, alimentação ou hospedagem durante o deslocamento. Isso permite que o sistema apresente um orçamento preciso e rápido para o seu evento.
            </Typography>
            <Typography variant="body1" paragraph className={styles.span}>
              Para nós, mais importante do que fazer é fazer bem feito.
            </Typography>
          </Grid>
        </Grid>


        <Grid container spacing={0} className={styles.gridContainerLeft}>
          <Grid item xs={12} md={6} sx={{ mt: 6 }}>
            <Typography variant="h3" gutterBottom className={styles.titleLeft}>
              Quais as vantagens?
            </Typography>
            <Typography variant="body1" paragraph className={styles.text}>
              Ao adquirir nosso sistema de gestão de eventos corporativos, você se beneficia de uma solução que combina rapidez, eficiência e precisão. A capacidade de processamento rápido permite respostas ágeis às demandas do evento, economizando tempo e simplificando o planejamento. Além disso, a precisão dos resultados garante que o evento seja estruturado de forma adequada e eficaz, adaptando-se às necessidades específicas de cada situação. Com a automação de tarefas complexas e a análise de múltiplas variáveis, o sistema simplifica o processo de planejamento, reduzindo erros e melhorando a qualidade do evento. A personalização é uma característica fundamental, permitindo que o sistema se adapte às particularidades de cada evento, desde o número de participantes até as necessidades logísticas individuais. Por fim, a conexão direta com fornecedores e a criação de orçamentos detalhados ajudam a otimizar os custos do evento, garantindo um retorno sobre o investimento mais vantajoso.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image className={styles.img}
              src="/assets/img/list.png"
              alt="Phone mockup"
              width={800}
              height={800}
              layout="responsive"
            />
          </Grid>
        </Grid>

        <Grid container spacing={0} className={styles.gridContainer}>
          <Grid item xs={12} md={6}>
            <Image className={styles.img}
              src="/assets/img/clipboard.png"
              alt="Phone mockup"
              width={800}
              height={800}
              layout="responsive"
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: 6 }}>
            <Typography variant="h3" gutterBottom className={styles.title}>
              E quanto custa?
            </Typography>
            <Typography variant="body1" paragraph className={styles.text}>
              O Start 360 oferece 3 opções de uso:
            </Typography>
            <Typography variant="body1" paragraph className={styles.text}>
              Uso Parcial: Você faz o orçamento e utiliza nosso banco de fornecedores, pagando-os diretamente e nós cobramos uma porcentagem com base no orçamento gerado.
            </Typography>
            <Typography variant="body1" paragraph className={styles.text}>
              Assinatura Mensal: Escolha entre os planos mensais para acesso completo a todas as ferramentas do sistema, adequando-se às suas necessidades.
            </Typography>
            <Typography variant="body1" paragraph className={styles.text}>
              Uso Completo: Deixe-nos cuidar de todo o evento, incluindo pagamento e gerenciamento de fornecedores. Você paga tudo depois, podendo optar por prazos de pagamento flexíveis.
            </Typography>
            <div className={styles.buttonContainer}>
              <Button className={styles.button} variant="contained" sx={{ mt: 3 }}>
                saiba mais...
              </Button>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={0} className={styles.gridContainer}>
          <Grid item xs={12} md={12} sx={{ mt: 6 }}>
            <Typography variant="h3" gutterBottom className={styles.titleLeft}>
              E o que está incluso?
            </Typography>
            <Typography variant="body1" paragraph className={styles.textLeft}>
              Dependendo da modalidade escolhida por você, você poderá fazer o orçamento, ajustar cada item individualmente, solicitar contato dos nossos especialistas para ajustar cada detalhe do evento.
            </Typography>
            <Typography variant="body1" paragraph className={styles.textLeft}>
              Com o nosso sistema você conta ainda com relatório em tempo real de custos previsto x realizado, todo sistema de gestão financeira, fiscal e contábil e ao nosso APP que conta com 2 versões, a versão usuário no qual centraliza todos os dados do seu participante fornecendo uma experiência única e exclusiva no mercado, tais como passagens aéreas, agendas, hospedagem e todas as demais informações de cada participante, e a versão administrador que fornece todos os dados financeiros e de gastos durante o evento para os gestores acompanharem em tempo real todos os aspectos do evento.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} className={styles.gridContainerImage}>
          {["iphone1.svg", "iphone2.svg", "iphone3.svg", "iphone4.svg", "iphone5.svg"].map((src, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <Image
                className={styles.img}
                src={`/assets/img/${src}`}
                alt={`Phone mockup ${index + 1}`}
                width={400}
                height={400}
                layout="responsive"
              />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={0} className={styles.gridContainerLeft}>
          <Typography variant="h5" gutterBottom className={styles.titleLeft}>
            F.A.Q.
          </Typography>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              className={styles.accordionSummary}
              expandIcon={<ExpandMoreIcon className={styles.accordionSummaryIcon} />}
            >
              <div className={styles.accordionSummaryContent}>
                <Typography className={styles.accordionSummaryContenText}>Como funciona o Start 360?</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <Typography className={styles.accordionDetailsText}>
                O Sistema Start 360 analisa o texto fornecido por você e através de uma inteligência artificial estrutura o evento com base nos conhecimentos disponíveis na IA, após estruturar o sistema busca no banco de fornecedores os fornecedores que atendem aos pré requisitos e então monta o orçamento.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className={styles.accordion}>
            <AccordionSummary
              className={styles.accordionSummary}
              expandIcon={<ExpandMoreIcon className={styles.accordionSummaryIcon} />}
            >
              <div className={styles.accordionSummaryContent}>
                <Typography className={styles.accordionSummaryContenText}>É possível recomendar fornecedores?</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <Typography className={styles.accordionDetailsText}>
                Sim é possível recomendar fornecedores. Para os fornecedores serem credenciados em nosso sistema é importante que ele possua CNPJ e que informe um meio de contato, depois disso nós entramos em contato com o fornecedor e prestador e acertamos tudo com ele. Esse processo pode levar até 5 dias úteis.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className={styles.accordion}>
            <AccordionSummary
              className={styles.accordionSummary}
              expandIcon={<ExpandMoreIcon className={styles.accordionSummaryIcon} />}
            >
              <div className={styles.accordionSummaryContent}>
                <Typography className={styles.accordionSummaryContenText}>Central de atendimento</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <Typography className={styles.accordionDetailsText}>
                Nós não possuímos uma central de atendimento, todo o atendimento é feito através dos nossos canais de comunicação e dos nossos consultores especialistas. Cada empresa/cliente possui o seu consultor dentro da nossa estrutura, dessa forma cada cliente sempre terá um contato fixo para atender as demandas.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className={styles.accordion}>
            <AccordionSummary
              className={styles.accordionSummary}
              expandIcon={<ExpandMoreIcon className={styles.accordionSummaryIcon} />}
            >
              <div className={styles.accordionSummaryContent}>
                <Typography className={styles.accordionSummaryContenText}>Suporte técnico e atendimento ao usuário</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <Typography className={styles.accordionDetailsText}>
                Nosso suporte técnico pode ser acessado através do e-mail suporte@start360.com.br, já o atendimento ao usuário é feito de duas maneiras. A primeira delas é ao usuário participante do evento, ele terá um canal de comunicação em tempo real com um suporte exclusivo para o evento, neste caso, ele pode fazer as suas solicitações dentro do próprio aplicativo. Já no caso de uma impossibilidade em acessar o app para solicitar o suporte, o usuário / convidado do seu evento pode enviar um email para nomedasuaempresa@start360.com.br ou em ambos os casos ele pode falar em nosso whatsapp em suporte (URL wa.me/55011987013258)
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className={styles.accordion}>
            <AccordionSummary
              className={styles.accordionSummary}
              expandIcon={<ExpandMoreIcon className={styles.accordionSummaryIcon} />}
            >
              <div className={styles.accordionSummaryContent}>
                <Typography className={styles.accordionSummaryContenText}>Cancelamento de produtos e serviços </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <Typography className={styles.accordionDetailsText}>
                Você pode cancelar sua assinatura a qualquer momento, assim como pode cancelar qualquer produto ou serviço sem nenhum tipo de cobrança, exceto se já existir um evento assinado ou um documento em fase final de assinatura, neste caso, cancelamentos devem ser solicitados direto ao consultor do seu atendimento.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className={styles.accordion}>
            <AccordionSummary
              className={styles.accordionSummary}
              expandIcon={<ExpandMoreIcon className={styles.accordionSummaryIcon} />}
            >
              <div className={styles.accordionSummaryContent}>
                <Typography className={styles.accordionSummaryContenText}>Fiz o orçamento, porque não consigo ver o nome do fornecedor?</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <Typography className={styles.accordionDetailsText}>
                Uma das principais funções do nosso sistema é ser capaz de gerar um orçamento com precisão usando nosso banco de dados de fornecedores, diariamente cadastramos centenas de novos fornecedores e estamos sempre atualizando nossa base de dados de fornecedores, no entanto, o contato entre o fornecedor e o evento é feito exclusivamente por nós, neste caso, seu contato será sempre nós, assim conseguimos atender as suas necessidades e você terá menos trabalho e dores de cabeça. Deixa tudo com a gente.Você pode cancelar sua assinatura a qualquer momento, assim como pode cancelar qualquer produto ou serviço sem nenhum tipo de cobrança, exceto se já existir um evento assinado ou um documento em fase final de assinatura, neste caso, cancelamentos devem ser solicitados direto ao consultor do seu atendimento.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid container spacing={2} className={styles.gridContainerLeft}>
          <Grid item xs={12} md={12}>
            <Typography variant="h5" gutterBottom className={styles.titleLeft}>
              PITCH
            </Typography>
            <iframe width="100%" height="600" src="https://www.youtube.com/embed/yBU-WjdzJzc?si=716imXQqBqouVAfC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="center" component="form" onSubmit={handleSubmit}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} className={styles.gridContainerForm}>
              <Grid item xs={12} md={6}>
                <Input
                  type="text"
                  fullWidth
                  placeholder="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className={styles.input}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  type="email"
                  fullWidth
                  placeholder="e-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className={styles.buttonContainerForm}>
              <Button type="submit" className={styles.button} variant="contained">
                fique por dentro
              </Button>
            </div>
          </Grid>
        </Grid>

      </Container>
      <Footer />
    </>
  );
}


