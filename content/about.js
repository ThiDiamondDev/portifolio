import { Typography } from "@mui/material";

const AboutContentEN = {
  headTitle: "About me",
  pageContent: (
    <Typography variant="body1" align="justify" color="colors.white">
      &emsp;Hello! I’m a web and mobile developer with experience in game
      development and 3D modeling and sculpting. I specialize in creating
      interactive and engaging experiences for users. My skills include HTML,
      CSS, JavaScript, React, NodeJS, Blender, and now my focus is build
      experiences with Unreal Engine.
      <br />
      <br />
      &emsp;I have a strong understanding of user experience and design
      principles. I am skilled in creating responsive designs that work
      seamlessly across different devices. I am also experienced in creating 3D
      models and animations that can be used in games and other interactive
      applications. I am passionate about staying up-to-date with the latest
      technologies and trends in the industry to ensure that my clients receive
      the best possible solutions
      <br />
      <br />
      &emsp;With Unreal Engine 5, I have worked on the top of the new features,
      like Lumen, Nanite and Procedural Content Generation, creating beautiful,
      optimized and functional experiences using Blueprints. I also have solid
      skills in programming languages like C++, python and JavaScript to
      integrate in any project and build solutions at scale.
    </Typography>
  ),
};
const AboutContentPT = {
  headTitle: "Sobre mim",
  pageContent: (
    <Typography variant="body1" align="justify" color="colors.white">
      &emsp;Olá! Eu sou um desenvolvedor web e mobile focando na criação de
      jogos Desenvolvimento e modelagem/esculturas 3D. Meu objetivo é criar
      experiências interativas e envolventes para os usuários. Minhas
      habilidades incluem HTML, CSS, JavaScript, React, Nodejs, C++, Blender e
      agora meu foco é construir games fotorrealistas utilizando a Unreal
      Engine.
      <br />
      <br />
      &emsp; Tenho um forte entendimento princípios de experiência do usuário e
      design. Sou hábil em criar designs responsivos que funcionam perfeitamente
      em diferentes dispositivos. Também tenho experiência em criar modelos 3D,
      cenários, texturização, retopologia, otimização e animações sempre
      buscando qualidade e performance. Sou apaixonado por me manter atualizado
      com o último tecnologias e tendências no setor para garantir a entrega das
      melhores soluções.
      <br />
      <br />
      &emsp; Com a Unreal Engine 5, busco dominar e utilizar dos novos recursos,
      como lúmen, nanite e geração de conteúdo procedural, criando experiências
      belas, otimizadas e funcionais. Eu também tenho habilidades sólido em
      linguagens de programação como C++, Python e JavaScript para integrar -se
      em qualquer projeto e construir soluções em escala.
    </Typography>
  ),
};

const AboutContent = {
  "en-US": AboutContentEN,
  "pt-BR": AboutContentPT,
};

export default AboutContent;
