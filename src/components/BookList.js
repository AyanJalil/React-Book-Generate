import BookShow from './BookShow.js';
import { useContext } from 'react';
import BookContext from '../context/books.js';

function BookList(){

    const { books } = useContext(BookContext);

    const renderbook = books.map((book)=>{
        return <BookShow key={book.id} book={book} />
    });
    return(
        <div className="book-list">
            {renderbook}  
        </div>
    )
}
export default BookList;