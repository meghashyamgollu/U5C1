import { useState } from "react";

function Books(props){
    const [books, updateCount] = useState(13);

    const updateBooks = (value) => {
        updateCount(books + value);
    }

    return(
        <div>
            <span>Books:</span>
            <button className="addBook" onClick = {
                () => updateBooks(1)
            } >+</button>
            <button className="remBook" onClick = {
                () => updateBooks(-1)
            } >-</button>
            <span className="totalBooks">{books}</span>
        </div>
    )
}

export default Books