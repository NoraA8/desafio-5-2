import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useFavoritosContext } from "../context/FavoritosContext";

export default function Home() {

  const { images } = useFavoritosContext()

  return (
    <div className="galeria grid-columns-5 p-3">
      { images.map((item) => (
        <article key={item.id}>
          <img src={item.src.tiny} alt={item.alt} className="size" />
          <Heart className="absolute" />
        </article>
        ))}
    </div>
  );
}
