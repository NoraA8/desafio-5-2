import { useFavoritosContext } from "../context/FavoritosContext";

export default function Favoritos() {
  
  const {likedPhotos} = useFavoritosContext()

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        { likedPhotos.map((item, index) => (
          <article key={index}>
            <img src={item.src.tiny} alt={item.alt} className="size" />
          </article>
        ))}
      </div>
    </div>
  );
}
