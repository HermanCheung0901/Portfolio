"use client"

import { useEffect, useState } from "react";
import Note from "./Note";
import AddBtn from "./AddBtn";
import SortingForm from "./SortingForm";

export default function NoteArea(props) {
  const API_URL = process.env.API_URL;
  const [bookList, setBookList] = useState(props.book_list);
  const [isEmptyBook, setIsEmptyBook] = useState(false);
  
  //Render book list
  function createNote(book) {
    return <Note key={book._id} id={book._id} cover={book.coverURL} title={book.title} rate={book.rate} review={book.review} />;
  }

  async function handleFormSubmit(order) {

    try {
      const res = await fetch(`/book-note/api/booklist?field=${order.field}&sort=${order.sort}`);

      if (!res.ok) {
        throw new Error("Failed to fetch book list");
      }

      const data = await res.json();
      setBookList(data);
    } catch (error) {
      console.log(error)
    }
  }

  return <>
    <SortingForm onSubmit={handleFormSubmit}/>
    <div className="note-area">
      {isEmptyBook ? 
      <><hr/><p>no note..</p></> : 
      bookList.map(createNote)}
    </div>
  </>
}