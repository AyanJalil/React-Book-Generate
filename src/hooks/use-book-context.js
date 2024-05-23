import BookContext from '../context/books.js';
import { useContext } from 'react';

function useBookContext(){
    return useContext(BookContext);
}

export default useBookContext;