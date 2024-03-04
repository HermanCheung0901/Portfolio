"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function InputArea() {

    const API_URL = process.env.API_URL;

    const router = useRouter();

    const [noteData, setNoteData] = useState([
        {note: ""},
    ])
    const [formData, setFormData] = useState({
        title: "",
        olid: "",
        date_read: "",
        rate: "",
        review: "",
        notes: [],
    });

    function handleformChange(e) {
        const {name, value, id} = e.target;

        if (id.includes("new-note")) {
            const updateNotes = noteData.map((note, index)=> {
                if (index == name) {
                    return {"note" : value}
                } else {
                    return note;
                }
            })
            setNoteData(updateNotes);
            setFormData((prevData)=> {
                return {...prevData, notes: noteData}
            });
        } else {
            setFormData((prevData)=>{
                return {...prevData, [name]: value};
            })
        }
    }

    async function handleformSubmit(e) {
        e.preventDefault();

        //Check if all boxes get input
        for (let x in formData) {
            if (formData[x] === "") {
                alert("Please enter a value in the empty box")
                return;
            }
        }

        //Check if rating between 1-5
        if (formData.rate > 5 || formData.rate < 1) {
            alert("Please enter 1 - 5 for rating");
            return;
        }

        try {
            const res = await fetch(`${API_URL}/book-note/add-book/api/post`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                router.refresh();
                router.push("/book-note");
            } else {
                throw new Error ("Failed to add book note");
            }
        } catch (error) {
            console.log(error);
        }
    }

    function handleAddMoreButtonClick() {
        setNoteData((prevValue)=> {
            return [...prevValue, {note: ""}];
        })
    }


    return <>
    <div className="input-area">
        <form id="add-form">
            <div className="input-item">
                <label htmlFor="new-title" className="input-title">Book Title</label>
                <input key={formData.title} name="title" id="new-title" value={formData.title} onChange={handleformChange}/>
            </div>
            <div className="input-item">
                <label htmlFor="new-olid" className="input-title">OLID</label>
                <input key={formData.olid} name="olid" id="new-olid" value={formData.olid} onChange={handleformChange} placeholder="e.g.,OL7826547M"/>
            </div>
            <div className="input-item">
                <label htmlFor="new-date-read" className="input-title">Date Read</label>
                <input key={formData.date_read} name="date_read" id="new-date-read" type="date" value={formData.date_read} onChange={handleformChange}/>
            </div>
            <div className="input-item">
                <label htmlFor="new-rate" className="input-title">Rating</label>
                <input key={formData.rate} name="rate" id="new-rate" type="number" min="1" max="5" value={formData.rate} onChange={handleformChange} placeholder="1-5"/>
            </div>
            <div className="input-item" id="input-review">
                <label htmlFor="new-review" className="input-title">My Review</label>
                <textarea
                    key={formData.review}
                    name="review"
                    id="new-review"
                    className="auto-height"
                    rows="10"
                    value={formData.review}
                    onChange={handleformChange}>
                </textarea>
            </div>
            <div className="input-item" id="input-notes">
                <h3 className="input-title">My Notes</h3>
                {
                    noteData.map((note, index)=> {
                        return (
                            <div key={index}>
                                <label key={index} htmlFor={`new-note-${index+1}`} className="input-title">{index+1}.</label>
                                <textarea
                                    key={index}
                                    name={index}
                                    className="newNote auto-height"
                                    id={`new-note-${index+1}`}
                                    rows="3"
                                    value={note.note}
                                    onChange={handleformChange}>
                                </textarea> 
                            </div>
                        )
                    })
                }
            </div>
            <button type="button" className="add-notes-button" onClick={handleAddMoreButtonClick}>add more note</button>
            <button type="submit" className="submit-button" onClick={handleformSubmit}><FontAwesomeIcon icon={faCheck} style={{color: "#ffffff",}} /> Save</button>
        </form>
    </div>
    </>
}