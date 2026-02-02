import { useState } from "react";
import BooksList from "./pages/BookList";
import BookForm from "./pages/BookForm";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="container">
      <h1>📚 Book Management</h1>

      <BookForm
        selectedBook={selectedBook}
        clearSelection={() => setSelectedBook(null)}
      />

      <BooksList onEdit={setSelectedBook} />
    </div>
  );
}

export default App;
