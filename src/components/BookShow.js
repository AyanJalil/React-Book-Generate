import {useState, useContext} from 'react';
import BookEdit from './BookEdit';
import BookContext from '../context/books';

function BookShow({book}){

    const { DeleteBookById } = useContext(BookContext);

    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = ()=>{
        DeleteBookById(book.id);
    };
    const handleEditClick = ()=>{
        setShowEdit(!showEdit);
    }

    const handleSubmit = ()=>{
        setShowEdit(false);
    }
    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit onSubmit={handleSubmit} book={book} />;
    }

    return(
        <div className="book-show">
            <img alt="book-imge" src={`https://picsum.photos/seed/${book.id}/300/200`} />
            {content} 
            <div className="actions">
                <button onClick={handleEditClick} className="edit">Edit</button>
                <button onClick={handleDeleteClick} className="delete"> Delete</button>
            </div>
        </div>
    )
}
export default BookShow;