import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BOOK_DETAILS_URL } from "../API";
import axios from "axios";
import "../App.css";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className='book-details'>
      {book ? (
        <>
          <div className='book-details-img'>
            <h2>{book.title}</h2>
            <img src={book.image_url} alt='#' />
          </div>
          <div className='book-details-description'>
            <h2>Description:</h2>
            <p>{book.description}</p>
            <h2>Author:</h2>
            <p>{book.authors}</p>
            <h2>Genres:</h2>
            <p>{book.genres}</p>
          </div>
        </>
      ) : (
        <h1>Could not find this book</h1>
      )}
    </div>
  );
};

export default BookDetails;
