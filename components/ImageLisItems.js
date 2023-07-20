const itemData = [
  { img: "GhostFaceTopology.png", title: "GhostFace Retopology" },

  { img: "CLOCK.png", title: "Old Clock" },

  { img: "DonnieDarkoCompressed.png", title: "Donnie Darko" },
  { img: "guitar.png", title: "8 Strings Guitar" },

  { img: "revolver.png", title: "Revolver" },

  { img: "CHURCH-INSIDE.png", title: "Old Church Interior" },

  { img: "Monster.png", title: "Horror Creature" },
  { img: "art.png", title: "Art the Clown from Terrifier" },

  { img: "scyth.png", title: "Death Scythe" },
  { img: "Taurus.png", title: "Minotaurus" },
];

export default itemData.map(({ img, title }) => ({
  img: `/PortfolioImages/${img}`,
  title,
}));
