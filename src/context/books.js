import { createContext, useState } from 'react';
import axios from 'axios';


const BookContext = createContext();

function Provider ({children}){
    const [books, setBooks] = useState([]);

  const fetchBooks = async ()=>{
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const DeleteBookById = async (id)=>{

    await axios.delete(`http://localhost:3001/books/${id}`);
    const deletebook = books.filter((book)=>{
      return book.id !== id;
    });
    setBooks(deletebook);
  };

  const editBookByID =async (id, newTitle)=>{
    const response =  await axios.put(`http://localhost:3001/books/${id}`,{
      title:newTitle
    });

    console.log(response);
    const UpdateBooks = books.map((book)=>{
      if(book.id === id){
        return {...book, ...response.data}
      }
      return book;
    });
    setBooks(UpdateBooks);
  };
  
  const createBook = async (title)=>{

    const response = await axios.post("http://localhost:3001/books",{
      title:title
    });
    const addbook = [
      ...books,
      response.data,
    ];
    setBooks(addbook);
  };

  const valuetoShare = {
    books:books,
    DeleteBookById:DeleteBookById,
    editBookByID:editBookByID,
    createBook:createBook,
    fetchBooks:fetchBooks
  }

    return <BookContext.Provider value={valuetoShare}>
        {children}
    </BookContext.Provider>
};

export {Provider};
export default BookContext;