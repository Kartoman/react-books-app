import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_URL } from "../API";
import { useAppContext } from "../context/AppContext";
import "../App.css";
import { useNavigate } from "react-router";

const BookList = () => {
  const nev = useNavigate();
  const [books, setBooks] = useState([]);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesCheacker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='book-list'>
      {books.map((book, i) => (
        <div key={i} className='book'>
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img
              onClick={() => nev(`/books/${book.id}`)}
              className='book-img'
              src={book.image_url}
              alt='#'
            />
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
      ))}
    </div>
  );
};

export default BookList;
