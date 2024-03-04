import Book from "../../../../(model)/Book";

export async function PATCH(request, {params}) {
    const {id} = params;
    const {date_read, rate, review, notes} = await request.json();
    await Book.findByIdAndUpdate(id, {$set: {date_read, rate, review, notes}});
    return Response.json({message: "Upated"}, {status: 200});
}