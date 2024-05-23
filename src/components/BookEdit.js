import { useState, useContext } from "react";
import BookContext from "../context/books";

function BookEdit({book, onSubmit}){
    const [title, setTitle] = useState(book.title);
    const { editBookByID } = useContext(BookContext);


    const handleChange = (event)=>{
        setTitle(event.target.value);
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        onSubmit();
        editBookByID(book.id, title);
    }
    
    return(
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input value={title} onChange={handleChange} className="input" />
            <button className="button is-primary">Save</button>
        </form>
    )
}
export default BookEdit;