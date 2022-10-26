import { useState, createContext, useContext, useCallback } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext must be within the Proivder !");
  }

  return context;
};

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = useCallback(
    (book) => {
      const oldFavorites = [...favorites];
      const newFavorites = oldFavorites.concat(book);
      setFavorites(newFavorites);
    },
    [favorites]
  );
  const removeFromFavorites = useCallback(
    (id) => {
      const oldFavorites = [...favorites];
      const newFavorites = oldFavorites.filter((book) => book.id !== id);
      setFavorites(newFavorites);
    },
    [favorites]
  );

  return (
    <AppContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
