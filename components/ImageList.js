import { ImageList, ImageListItem } from "@mui/material";
const itemData = [
  { img: "/PortfolioImages/guitar.png", title: "8 Strings Guitar" },
  { img: "/PortfolioImages/church2.png", title: "Old Country Church" },
  { img: "/PortfolioImages/CLOCK.png", title: "Old Clock" },
  { img: "/PortfolioImages/revolver.png", title: "Revolver" },
  { img: "/PortfolioImages/Monster.png", title: "Horror Creature" },
  { img: "/PortfolioImages/art.png", title: "Art the Clown from Terrifier" },
  { img: "/PortfolioImages/scyth.png", title: "Death Scythe" },
  { img: "/PortfolioImages/Taurus.png", title: "Minotaurus" },
];

const ImageItem = (item, index, onClick) => (
  <a key={index} onClick={() => onClick(item)}>
    <ImageListItem>
      <img
        src={`${item.img}?w=248&fit=crop&auto=format`}
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  </a>
);

export default function MyImageList({ onClick }) {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {itemData.map((item, index) => ImageItem(item, index, onClick))}
    </ImageList>
  );
}
