import Book from "../../(model)/Book";
import connect from "@/app/_lib/bookNoteDB";

export async function GET(request) {
    await connect();
    const field = request.nextUrl.searchParams.get("field");
    const sort = parseInt(request.nextUrl.searchParams.get("sort"));
    const bookList = await Book.find().sort({[field]:sort});
    return Response.json(bookList);
}