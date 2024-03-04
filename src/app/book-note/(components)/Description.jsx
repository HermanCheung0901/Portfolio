import Link from "next/link";

export default function Description() {
  return (
    <p className="summary">
      BookNotes is your go-to website for tracking and taking notes on the books
      you read. With a user-friendly interface, it's never been easier to
      organize your book collection and capture your thoughts.
      <br />
      <br />
      Select the book you've read from <Link href="https://openlibrary.org/">Open Library</Link>. Enter the Open Library ID (OLID) of the book and your notes by pressing Add Book button. Once added, you can start creating
      personalized notes, jotting down quotes, and highlighting key takeaways.
    </p>
  );
}
