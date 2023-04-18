import { useState } from "react";
import React from "react"

import { v4 as uuidv4 } from 'uuid';

//Form for adding book details & this form is used by editBook component & addBook component.

const BookForm = ({ book, handleSubmit }) => {
  const [bookState, setBookState] = useState({
    name: book ? book.name : '',
    author: book ? book.author : '',
    price: book ? book.price : '',
    category: book ? book.category: '',
    description: book ? book.description: ''
  });

  const handleChange = (e) => {
    setBookState({
      ...bookState,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      id: uuidv4(),
      date: new Date(),
      ...bookState
    });
    setBookState({ name: '', author: '', price: '', category: '', description: ''})
  }

  const renderInputField = (label, placeholder, name) => (
    <div className="inputField">
      <label>{label}</label>
      <input value={bookState[name]} onChange={handleChange} name={name} type="text" placeholder={placeholder} />
    </div>
  );

  const disabledSubmit = !bookState.name || !bookState.author || !bookState.price;

  return (
    <form onSubmit={onSubmit} className="form">
      <div className="form-content">
      {renderInputField('Book Name', 'Enter name of book...', 'name')}
      {renderInputField('Book Author', 'Enter name of author...', 'author')}
      {renderInputField('Book Price', 'Enter price of book...', 'price')}
      {renderInputField('Book Category', 'Enter category of book...', 'category')}
      {renderInputField('Book Description', 'Enter description of book...', 'description')}
      <button type="submit" className="btnForm" disabled={disabledSubmit}>{book ? 'Update' : 'Submit'}</button>
      </div></form>
  )
}

//Submit button will be enabled once all the fields of book form has been filled.
export default BookForm