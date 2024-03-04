import Book from "../(model)/Book";
import connect from "@/app/_lib/bookNoteDB";
import getCover from "@/app/_lib/getCover";

export async function GET() {
    await connect();
    const res = await Book.find().sort({_id:-1});
    const bookList = await getCover(res);
    return Response.json(bookList);
}