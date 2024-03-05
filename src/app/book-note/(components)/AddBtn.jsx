import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export default function AddBtn() {
  return (
    <a className="addNewBtn withBooks" href="/book-note/add-book">
      <FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} /> Add Book
    </a>
  );
}
