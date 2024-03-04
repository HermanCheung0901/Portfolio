const API_URL = 'https://covers.openlibrary.org'

const getCover = async (bookdata) => {
  const books = Array.isArray(bookdata)? bookdata : [bookdata];
  await Promise.all(books.map(getBookInfo));
  return books;
}

async function fetchBookCover(olid) {
  
  const res = await fetch(`${API_URL}/b/olid/${olid}.json`)
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch book cover')
  }

  return res.json()
}
  
async function getBookInfo(book) {
  const cover = await fetchBookCover(book.OLID);
  book.coverURL = cover.source_url || `${API_URL}/b/olid/${book.OLID}-M.jpg`;
  return book;
}

export default getCover;