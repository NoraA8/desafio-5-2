import { createContext, useContext, useState, useEffect } from "react";

export const FavoritosContext = createContext()

const FavoritosContextProvider = ({children}) => {
    const [images, setImages] = useState([]);

  const getData = async () => {
    const res = await fetch("/fotos.json");
    const data = await res.json();
    setImages(data.photos);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <FavoritosContext.Provider
      value={{
        images
      }}
    >
      {children}
    </FavoritosContext.Provider>
     );
}

export const useFavoritosContext = () => useContext(FavoritosContext);

export default FavoritosContextProvider;