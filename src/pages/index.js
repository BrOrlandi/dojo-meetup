import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import '../styles/home.css';


const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <div className="home__logo">
      <Image
        fluid={data.file.childImageSharp.fluid}
        alt="Logo do Campinas Front-end"
        fadeIn={false}
      />
    </div>
    <h1>Eventos</h1>
    <p>Participe dos meetups e outros eventos do Campinas Front-end, veja quais já ocorreram:</p>
    <Link to="/eventos">Eventos</Link>
    <h1>Manifesto</h1>
    <p>
      Nosso objetivo é aumentar e fortalecer a comunidade de desenvolvedores web
      de Campinas e região.
    </p>
    <p>
      Queremos encorajar e amparar aqueles que estão começando no mundo do
      desenvolvimento, por meio de encontros e canais abertos de comunicação.
    </p>
    <p>
      Desejamos criar uma comunidade de desenvolvedores disposta a ajudar outras
      comunidades de forma voluntária.
    </p>
      Acreditamos que o conhecimento é livre e que ele deve ser compartilhado.
    <h1>Código de conduta</h1>
    <p>
      Ao comparecer a algum de nossos eventos, incluindo um organizador,
      palestrante, patrocinador, voluntário ou convidado, você concorda em
      cumprir este código de conduta e cooperar com os organizadores do evento.
    </p>
    <p>
      Desejamos que nossos eventos sejam livres de assédio para todos,
      independentemente do sexo, orientação sexual, deficiência, idade,
      aparência física, tamanho do corpo, raça ou religião (ou falta dela).
      Nós não toleramos o assédio aos participantes do evento sob qualquer
      forma. Linguagem e imagens sexuais não são apropriadas em qualquer local
      dos eventos. Os participantes que violarem estas regras poderão ser
      punidos ou expulsos, a critério dos organizadores do evento.
    </p>
  </Layout>
);

export const queryLogo = graphql`
query MyQuery {
  file(relativePath: {eq: "logo.png"}) {
    id
    childImageSharp {
      fluid(maxWidth: 1024) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

export default IndexPage;
