const express = require("express");
const router = express.Router();

const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
} = require("../controllers/bookController");

/* CREATE */
router.post("/", createBook);

/* READ ALL */
router.get("/", getAllBooks);

/* READ ONE */
router.get("/:id", getBookById);

/* UPDATE */
router.put("/:id", updateBook);

/* DELETE */
router.delete("/:id", deleteBook);

module.exports = router;
