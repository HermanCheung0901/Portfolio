"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import RemoveButton from "../(components)/RemoveButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


export default function Detail({book_detail}) {

    const {_id, title, date_read, rate, OLID, review, coverURL, notes} = book_detail[0];
    const [isEditMode, setIsEditMode] = useState(false);
    const [notesData, setNotesData] = useState(notes);
    const [formData, setFormData] = useState({
        rate:rate,
        date_read:date_read,
        review:review,
        notes:notesData.map((note)=> {return {"note": note.note}})
    });

    const router = useRouter();
    
    //Handle form change
    function handleChange(e) {
        const {name, value} = e.target;
        if (name == "note") {
            const updateNotesData = notesData.map((noteArr, index) => {
                if (index == e.target.id) {
                    return {
                        ...noteArr, 
                        note: value
                    }
                } else {
                    return noteArr;
                }
            });

            const newNotes = updateNotesData.map((note) => {
                return {"note": note.note};
            })
            //Update the notes array
            setNotesData(updateNotesData);
            //Update the formData
            setFormData(prevValue => {
                return {...prevValue, notes:newNotes}
            })
        } else {
            setFormData(prevValue => {
                return {...prevValue, [name]:value}
            });    
        }
    }

    //Change edit mode
    function hanldeEditModeSwitch() {
        setNotesData(notes);
        setFormData({
            rate:rate,
            date_read:date_read,
            review:review,
            notes:notesData.map((note)=> {return {"note": note.note}})
        });
        setIsEditMode(prevValue => {return !prevValue});
    }


    async function hanldeSubmitFrom(e) {
        e.preventDefault();

        //Check if rating is empty
        if (formData.rate === "") {
            alert("Please enter rating");
            return;
        }

        //Check if rating is vaild
        if (formData.rate > 5 || formData.rate < 1) {
            alert("Please enter 1 - 5 for rating");
            return;
        }

        try {
            const res = await fetch(`/book-note/detail/${_id}/api/patch`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData),
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Failed to update note")
            } 

            setIsEditMode(false);
            router.refresh(`/book-note/detail/${_id}`);
        } catch (error) {
            console.log(error)
        }
    }

    //Handle insert note button 
    function handleAddMoreButtonClick() {
        setNotesData((prevNote)=> {
            return [...prevNote, {note: ""}]
        })
    }

    //Generate stars
    function generateStar(num) {
        const stars = [];
        for (let i = 0; i < num ; i++) {
          stars.push(
            <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
          );
        }
        return stars;
      }

    return <div className="detail">
            <form onSubmit={hanldeSubmitFrom}>
                <div className="top">
                    <Row>
                        <Col md="4">
                        <div className="cover-container">
                            <div className="book-cover">
                                <Image className="image" loader={() => coverURL} src={coverURL} fill={true} alt={title}/>
                            </div>
                        </div>
                        </Col>
                        <Col md="8">
                            <div className="book-info">
                                <p className="book-title">{title}</p>
                                <p className="sub-title">OLID : {OLID}</p>
                                <p className="sub-title">Date Read : {
                                    isEditMode ?
                                    <input key={_id} name="date_read" type="date" value={formData.date_read} onChange={handleChange}/> :
                                    <>{date_read}</>
                                }</p>
                                <p className="sub-title">Rating : {
                                    isEditMode ?
                                    <input key={_id} name="rate" value={formData.rate} onChange={handleChange} type="number" min="1" max="5" placeholder="1-5"/> :
                                    <>{generateStar(formData.rate)}</>
                                }</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr/>
                <div className="bottom">
                    <Row>
                        <Col md="12">
                            <div className="my-review">
                                <p className="sub-title">My Review :</p>
                                {
                                    isEditMode ?
                                    <textarea key={_id} name="review" className="auto-height" rows="10" value={formData.review} onChange={handleChange}></textarea> :
                                    <p className="content">{review}</p>
                                }
                            </div>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <div className="my-notes">
                            <p className="sub-title">My Notes :</p>
                            {notesData.map((note, index)=> {
                                return (
                                    <Col key={index} md="12">
                                        <div key={index} className="note">
                                            <label key={index} htmlFor="index" className="sub-title">{index+1}.</label>
                                            {
                                                isEditMode ?
                                                <textarea key={index} id={index} name="note" className="auto-height" rows="3"  value={note.note} onChange={handleChange}></textarea> :
                                                <p className="content">{note.note}</p>
                                            }
                                        </div>
                                    </Col>
                                    )
                            })}
                        </div>
                    </Row>        
                </div>
                    {
                    isEditMode ? <>
                        <button className="add-note-button" type="button" onClick={handleAddMoreButtonClick}>add more notes</button>
                        <button className="submit-button" type="submit"><FontAwesomeIcon icon={faCheck} style={{color: "#ffffff",}} /> Save</button> 
                        <div className="button-group">
                            <RemoveButton id={_id}/>
                            <button className="cancel-button" type="button" onClick={()=>{hanldeEditModeSwitch()}}><FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} /> Cancel</button>                          
                        </div></> :
                        <button className="edit-button" type="button" onClick={()=>{hanldeEditModeSwitch()}}>
                            <FontAwesomeIcon icon={faPenToSquare} style={{color: "#ffffff",}} /> Edit Note
                        </button>
                    }         
            </form>
            
        </div>
}