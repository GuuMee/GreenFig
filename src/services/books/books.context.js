import React, { useState, createContext, useEffect } from "react";
import { booksRequest } from "./books.service";

export const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveBooks = () => {
    setIsLoading(true);
    setTimeout(() => {
      booksRequest().then;
    }, 1000);
  };

  useEffect(() => {
    retrieveBooks();
  }, []);
  return (
    <BooksContext.Provider
      value={{
        books: [1, 2, 3],
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
