import Book from "../../../../(model)/Book";
import getCover from "@/app/_lib/getCover";

export async function GET(_request, {params}) {
    const {id} = params;
    const result = await Book.findById(id).exec();
    const bookDetail = await getCover(result);
    return Response.json(bookDetail);
}