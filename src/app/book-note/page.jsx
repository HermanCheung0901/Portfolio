import AddBtn from "./(components)/AddBtn";
import NoteArea from "./(components)/NoteArea";
import "bootstrap/dist/css/bootstrap.min.css";
import Description from "./(components)/Description";
import Title from "./(components)/Title";

async function getBookList() {
  try {
    const res = await fetch("http://localhost:3000/book-note/api", {
      cache: "no-store"
    });

    if (!res.ok) {
      throw new Error("Failed to fetch book list");
    }

    const data = await res.json();
    console.log("home")
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
