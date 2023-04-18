import { useContext } from "react";
import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import BookForm from "./form/BookForm"


//editing the existing book details which makes use of Book Form to update the details. 
const EditBook = () => {
  const { id } = useParams();
  const navigate = useHistory();
  const { books, setBooks } = useContext(BookContext);
  const bookToEdit = books.filter(book => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBook = books.filter(book => book.id !== id);
    setBooks([book, ...filteredBook]);
    navigate.push('/home');
  }

  return (
    <div className="addForm">
      <BookForm book={bookToEdit[0]} handleSubmit={handleOnSubmit} />
    </div>
  )
}

export default EditBook