import Book from "../(model)/Book";
import connect from "@/app/_lib/bookNoteDB";

export async function GET() {
    await connect();
    const bookList = await Book.find().sort({date_read:-1});
    console.log(bookList)
    return Response.json(bookList);
}