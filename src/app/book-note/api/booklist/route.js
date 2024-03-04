import Book from "../../(model)/Book";
import connect from "@/app/_lib/bookNoteDB";
import getCover from "@/app/_lib/getCover";

export async function GET(request) {
    await connect();
    const field = request.nextUrl.searchParams.get("field") || "date_read";
    const sort = parseInt(request.nextUrl.searchParams.get("sort")) || -1;
    const res = await Book.find().sort({[field]:sort, _id:-1});
    const bookList = await getCover(res);
    return Response.json(bookList);
}