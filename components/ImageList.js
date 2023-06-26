import { ImageList, ImageListItem } from "@mui/material";
const itemData = [
  { img: "/PortfolioImages/church2.png", title: "Old Country Church" },

  { img: "/PortfolioImages/CLOCK.png", title: "Old Clock" },
  { img: "/PortfolioImages/revolver.png", title: "Revolver" },
  { img: "/PortfolioImages/scyth.png", title: "Death Scythe" },
  { img: "/PortfolioImages/Monster.png", title: "Horror Creature" },
  { img: "/PortfolioImages/art.png", title: "Art the Clown from Terrifier" },
  { img: "/PortfolioImages/Taurus.png", title: "Minotaurus" },
];

export default function MyImageList({ onClick }) {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {itemData.map((item) => (
        <a onClick={() => onClick(item)}>
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        </a>
      ))}
    </ImageList>
  );
}
