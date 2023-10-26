const cardsEN = [
  {
    image: "/joan-gamell-ZS67i1HLllo-unsplash.jpg",
    title: "Web and Mobile Development",
    description: "",
  },
  {
    image: "/warren-hansen-uCMNeSNS54U-unsplash.jpg",
    title: "3D Modeling, Rigging and Animation",
    description: "",
  },
  {
    image: "/jose-gil-2pNdTBn4C7U-unsplash.jpg",
    title: "Game Design and Production",
    description: "",
  },
];

const cardsTitlePT = [
  "Desenvolvimento Web e Mobile",
  "Modelagem 3D e Animações",
  "Design e Produção de Games",
];
const cardsPT = cardsEN.map(({ title, ...rest }, index) => ({
  ...rest,
  title: cardsTitlePT[index],
}));

const ContactContentEN = {
  title: "Contact me",
  cards: cardsEN,
  pageContent: (
    <>
      Here are my social networks for specialized contact and assistance for any
      help in your favorite platform.
    </>
  ),
};

const ContactContentPT = {
  title: "Entre em Contato",
  cards: cardsPT,
  pageContent: (
    <>
      Aqui estão minhas redes sociais para contato especializado e assistência
      para qualquer ajuda em sua plataforma favorita.
    </>
  ),
};
const ContactContent = {
  "en-US": ContactContentEN,
  "pt-BR": ContactContentPT,
};

export default ContactContent;
