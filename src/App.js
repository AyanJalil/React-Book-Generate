import BookCreate from './components/BookCreate.js';
import BookList from './components/BookList.js';
import BookContext from './context/books.js';
import { useEffect, useContext } from 'react';



function App(){
  
  const { fetchBooks } = useContext(BookContext);

  useEffect(()=>{
    fetchBooks();
  },[]);

  

  return(
    <div className="app">
      <BookList />
      <BookCreate />
    </div>
  );
}
export default App;