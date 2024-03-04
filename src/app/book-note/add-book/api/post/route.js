import Book from "../../../(model)/Book";

export async function POST(request) {
    // Extract the necessary data from the request body
    const {title, olid, date_read, rate, review, notes} = await request.json();

    //Filter the vaild note
    const notesWithoutEmpty = notes.filter((note)=> {
        return note.note !== "" && note.note !== null && note.note !== undefined;
    })
    try {
        // Save new book to DB
        const new_book = new Book({
            title:title,
            date_read:date_read,
            rate:rate,
            OLID:olid,
            review:review,
            notes:notesWithoutEmpty,
        });
        await new_book.save();
        console.log("Successful add book");

        return Response.json(new_book);
 
    } catch (err) {
        throw new Error("Error in inserting book");
    }
}
