import Title from "../../(components)/Title";
import Detail from "../../(components)/Detail"
import "bootstrap/dist/css/bootstrap.min.css";

export default async function DetailPage({params}) {
    const {id} = params;

    async function getBookDetail() {
        try {
            const res = await fetch(`http://localhost:3000/book-note/detail/${id}/api/get`, {
                cache: "no-store"
            });

            if (!res.ok) {
                throw new Error ("Failed to fetch book details");
            }

            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const bookDetail = await getBookDetail();

    return <>
        <Title title={"My Book Notes"}/>
        <Detail book_detail={bookDetail}/>  
    </>
}