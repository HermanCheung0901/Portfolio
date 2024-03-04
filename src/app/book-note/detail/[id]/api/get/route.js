import Book from "../../../../(model)/Book";
import connect from "@/app/_lib/bookNoteDB";

export async function GET(_request, {params}) {
    await connect();
    const {id} = params;
    const bookDetail = await Book.findById(id).exec();
    return Response.json(bookDetail);
}