import { useEffect, useState } from "react";
import { createBook, updateBook } from "../api/bookApi";

function BookForm({ selectedBook, clearSelection }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedBook) {
      setFormData({
        title: selectedBook.title,
        author: selectedBook.author,
      });
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.author) {
      return setError("All fields are required");
    }

    try {
      setLoading(true);
      setError("");

      if (selectedBook) {
        await updateBook(selectedBook._id, formData);
        clearSelection();
      } else {
        await createBook(formData);
      }

      setFormData({ title: "", author: "" });
      window.location.reload(); // simple refresh for test
    } catch {
      setError("Failed to save book");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>{selectedBook ? "Edit Book" : "Add Book"}</h2>

      {error && <p className="error">{error}</p>}

      <input
        type="text"
        name="title"
        placeholder="Book title"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="author"
        placeholder="Author name"
        value={formData.author}
        onChange={handleChange}
      />

      <button disabled={loading}>
        {loading ? "Saving..." : selectedBook ? "Update" : "Create"}
      </button>

      {selectedBook && (
        <button type="button" className="cancel" onClick={clearSelection}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default BookForm;
