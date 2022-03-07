import { useState } from "react";

function Books(props){
    const [books, updateCount] = useState(props.value);

    const updateBooks = (value) => {
        if(books===0){
            return;
        }
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

function Pens(props){
    const [pens, updateCount] = useState(props.value);

    const updatePens = (value) => {
        if(pens===0){
            return;
        }
        updateCount(pens + value);
    }

    return(
        <div>
            <span>Pens:</span>
            <button className="addPen" onClick = {
                () => updatePens(1)
            } >+</button>
            <button className="remPen" onClick = {
                () => updatePens(-1)
            } >-</button>
            <span className="totalPens">{pens}</span>
        </div>
    )
}

function Notebooks(props){
    const [notebooks, updateCount] = useState(props.value);

    const updateNotebooks = (value) => {
        if(notebooks===0){
            return;
        }
        updateCount(notebooks + value);
    }

    return(
        <div>
            <span>Notebooks:</span>
            <button className="addNotebook" onClick = {
                () => updateNotebooks(1)
            } >+</button>
            <button className="remNotebook" onClick = {
                () => updateNotebooks(-1)
            } >-</button>
            <span className="totalNotebooks">{notebooks}</span>
        </div>
    )
}

function Inkpens(props){
    const [inkpens, updateCount] = useState(props.value);

    const updateInkpens = (value) => {
        if(inkpens===0){
            return;
        }
        updateCount(inkpens + value);
    }

    return(
        <div>
            <span>Inkpens:</span>
            <button className="addInkpen" onClick = {
                () => updateInkpens(1)
            } >+</button>
            <button className="remInkpen" onClick = {
                () => updateInkpens(-1)
            } >-</button>
            <span className="totalInkpens">{inkpens}</span>
        </div>
    )
}

export  {Books, Pens, Notebooks, Inkpens};