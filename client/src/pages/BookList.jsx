import { useEffect, useState } from "react";
import { deleteBook, getBooks } from "../api/bookApi";
import Pagination from "../components/Pagination";

function BooksList({ onEdit }) {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await getBooks(page);

      // ✅ Correct API response handling
      setBooks(res.data.data.books);
      setTotalPages(res.data.data.totalPages);
    } catch (err) {
      setError("Failed to load books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [page]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this book?")) return;

    try {
      await deleteBook(id);
      fetchBooks(); // refresh list after delete
    } catch {
      alert("Delete failed");
    }
  };

  return (
    <div className="card">
      <h2>Books List</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && books.length === 0 && !error && (
        <p>No books found</p>
      )}

      {books.map((book) => (
        <div className="book" key={book._id}>
          <div>
            <strong>{book.title}</strong>
            <p>{book.author}</p>
          </div>

          <div>
            <button onClick={() => onEdit(book)}>Edit</button>
            <button
              className="danger"
              onClick={() => handleDelete(book._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* ✅ Pagination */}
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default BooksList;
