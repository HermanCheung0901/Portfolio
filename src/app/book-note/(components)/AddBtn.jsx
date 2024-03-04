import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Link from "next/link";

export default function AddBtn() {
  return (
    <button className="addNewBtn withBooks">
      <Link href="/book-note/add-book">
      <FontAwesomeIcon icon={faPlus} size="2xl" style={{color: "#ffffff",}} /> Add Book
      </Link>
    </button>
  );
}
