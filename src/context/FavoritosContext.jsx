import { createContext, useContext, useState, useEffect } from "react";

export const FavoritosContext = createContext()

const FavoritosContextProvider = ({children}) => {
    const [images, setImages] = useState([]);
    const [likedPhotos, setLikedPhotos] = useState([]);

  const getData = async () => {
    const res = await fetch("/fotos.json");
    const data = await res.json();
    setImages(data.photos);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleLiked = (index) => {
    const newLikedPhotos = [...likedPhotos];
    const photo = images[index];
    const photoIndex = newLikedPhotos.findIndex(
      (likedPhoto) => likedPhoto.id === photo.id
    );

    if (photoIndex > -1) {
      newLikedPhotos.splice(photoIndex, 1);
    } else {
      newLikedPhotos.push(photo);
    }

    setLikedPhotos(newLikedPhotos);
  };

  return (
    <FavoritosContext.Provider
      value={{
        images,
        likedPhotos,
        handleLiked
      }}
    >
      {children}
    </FavoritosContext.Provider>
     );
}

export const useFavoritosContext = () => useContext(FavoritosContext);

export default FavoritosContextProvider;