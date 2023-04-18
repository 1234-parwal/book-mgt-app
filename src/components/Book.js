import { useHistory } from "react-router-dom";
import React from 'react';


//Book component: book detail card on book listing page.
const Book = ({ book, handleRemoveBook }) => {
  const navigate = useHistory();
  const { id, name, author, price, date, category, description } = book;

  return (
    <div className="book">
      <h2>{name}</h2>
      <div className="bookDetail">
        <p>Author: {author}</p>
        <p>Price: {price}</p>
        <p>Date: {new Date(date).toDateString()}</p>
        <p>Category:{category}</p>
        <p>Description: {description}</p>
        <p>Rate Now</p>
      </div>
      <div className="buttons">
        <button onClick={() => navigate.push(`/edit/${id}`)}>Edit</button>
        <button onClick={() => handleRemoveBook(id)}>Delete</button>
      </div>
    </div>
  )
}

export default Book