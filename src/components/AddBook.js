import React from 'react';
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import BookForm from "./form/BookForm"

//for adding a new book to the user profile.
const AddBook = () => {
  const history = useHistory();
  const { books, setBooks } = useContext(BookContext);

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    history.push('/home');
  }

  return (
    <div className="addForm">
      <BookForm handleSubmit={handleOnSubmit} />
    </div>
  )
}
//Book Form is the basic form for adding book details.
export default AddBook