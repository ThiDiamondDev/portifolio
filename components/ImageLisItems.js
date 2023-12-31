const itemData = [
  { img: "GhostFaceTopology.png", title: "GhostFace Retopology" },

  { img: "CabinRender.png", title: "Creepy Cabin" },
  { img: "castle.png", title: "Creepy Castle" },
  { img: "Corredor.png", title: "Dungeon" },
  { img: "CLOCK.png", title: "Old Clock" },

  { img: "guitar.png", title: "8 Strings Guitar" },
  { img: "monsterretopo.png", title: "Monster Retopology" },

  { img: "room.png", title: "Cool room" },
  { img: "music.png", title: "Music room" },

  { img: "revolver.png", title: "Revolver" },
  { img: "CHURCH-INSIDE.png", title: "Old Church Interior" },

  { img: "art.png", title: "Art the Clown from Terrifier" },
  { img: "Monster.png", title: "Horror Creature" },

  { img: "scyth.png", title: "Death Scythe" },
  { img: "Taurus.png", title: "Minotaurus" },
];

export default itemData.map(({ img, title }) => ({
  img: `/PortfolioImages/${img}`,
  title,
}));
