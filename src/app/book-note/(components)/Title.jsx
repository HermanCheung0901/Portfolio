import Link from "next/link";

export default function Title({title}) {

  return (
    <h1 className="title" style={title === "Add New Book" ? { textAlign: "center" } : null}>
      <Link href={"/book-note"} className="text">
        {title}
      </Link>
    </h1>
  );
}
