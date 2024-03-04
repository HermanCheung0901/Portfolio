import Book from "../../../../(model)/Book";
import connect from "@/app/_lib/bookNoteDB";

export async function DELETE(_request, {params}) {
    await connect()
    const {id} = params;
    await Book.findByIdAndDelete(id);
    return Response.json({message: "Removed"}, {status:200})
}