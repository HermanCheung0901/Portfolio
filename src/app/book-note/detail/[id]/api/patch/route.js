import Book from "../../../../(model)/Book";
import connect from "@/app/_lib/bookNoteDB";

export async function PATCH(request, {params}) {
    await connect();
    const {id} = params;
    const {date_read, rate, review, notes} = await request.json();
    await Book.findByIdAndUpdate(id, {$set: {date_read, rate, review, notes}});
    return Response.json({message: "Upated"}, {status: 200});
}