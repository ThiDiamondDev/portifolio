import { ImageList, ImageListItem } from "@mui/material";
import itemData from "./ImageLisItems";

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
