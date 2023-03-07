import { useFavoritosContext } from "../context/FavoritosContext";

export default function Favoritos() {
  
  const {favoritos} = useFavoritosContext()

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">

      </div>
    </div>
  );
}
