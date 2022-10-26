import React from "react";

import { useAppContext } from "../context/AppContext";
import "../App.css";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesCheacker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className='favorites'>
      {favorites.length > 0 ? (
        favorites.map((book, i) => (
          <div key={i} className='book'>
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img className='book-img' src={book.image_url} alt='#' />
            </div>
            <div>
              {favoritesCheacker(book.id) ? (
                <button
                  className='book-button'
                  onClick={() => removeFromFavorites(book.id)}
                >
                  Remove from Favorites
                </button>
              ) : (
                <button
                  className='book-button'
                  onClick={() => addToFavorites(book)}
                >
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>You dont have any favorites books</h1>
      )}
    </div>
  );
};

export default Favorites;
