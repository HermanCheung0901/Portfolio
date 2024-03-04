import Book from "../../../../(model)/Book";

export async function DELETE(_request, {params}) {
    const {id} = params;
    await Book.findByIdAndDelete(id);
    return Response.json({message: "Removed"}, {status:200})
}