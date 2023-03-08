import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useFavoritosContext } from "../context/FavoritosContext";

export default function Home() {
  const { images, likedPhotos, handleLiked } = useFavoritosContext();

  return (
    <div className="galeria grid-columns-5 p-3">
      {images.map((item, index) => {
        const isLiked = likedPhotos.some(
          (likedPhoto) => likedPhoto.id === item.id
        );
        const filled = isLiked ? "liked" : "";

        return (
          <article key={item.id}>
            <img src={item.src.tiny} alt={item.alt} className="size" />
            <Heart
              handleLiked={() => handleLiked(index)}
              filled={filled}
              className="absolute"
            />
          </article>
        );
      })}
    </div>
  );
}
