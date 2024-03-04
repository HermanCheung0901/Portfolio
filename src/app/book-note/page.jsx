import AddBtn from "./(components)/AddBtn";
import NoteArea from "./(components)/NoteArea";
import "bootstrap/dist/css/bootstrap.min.css";
import Description from "./(components)/Description";
import Title from "./(components)/Title";

async function getBookList() {
  const API_URL = process.env.API_URL;
  try {
    const res = await fetch(`${API_URL}/book-note/api`, {
      cache: "no-store"
    });

    if (!res.ok) {
      throw new Error("Failed to fetch book list");
    }

    const data = await res.json();
    console.log("access to home page")
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function HomePage() {

  const book_list = await getBookList();
  return (
    <>
      <Title title={"My Book Notes"}/>
      <Description />
      <NoteArea book_list={book_list}/>
      <AddBtn />
    </>  
  );
}
