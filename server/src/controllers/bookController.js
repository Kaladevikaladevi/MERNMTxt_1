const Book = require("../models/Book");
const {
  successResponse,
  errorResponse
} = require("../utils/apiResponse");

/**
 * STEP 1: Create Book
 */
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    return successResponse(res, 201, "Book created successfully", book);
  } catch (error) {
    return errorResponse(res, 500, "Failed to create book", error.message);
  }
};

/**
 * STEP 2: Get All Books (Pagination)
 */
exports.getAllBooks = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const totalBooks = await Book.countDocuments();
    const books = await Book.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    return successResponse(res, 200, "Books fetched successfully", {
      totalBooks,
      currentPage: page,
      totalPages: Math.ceil(totalBooks / limit),
      books
    });
  } catch (error) {
    return errorResponse(res, 500, "Failed to fetch books", error.message);
  }
};

/**
 * STEP 3: Get Book by ID
 */
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return errorResponse(res, 404, "Book not found");
    }

    return successResponse(res, 200, "Book fetched successfully", book);
  } catch (error) {
    return errorResponse(res, 400, "Invalid book ID", error.message);
  }
};

/**
 * STEP 4: Update Book
 */
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!book) {
      return errorResponse(res, 404, "Book not found");
    }

    return successResponse(res, 200, "Book updated successfully", book);
  } catch (error) {
    return errorResponse(res, 500, "Failed to update book", error.message);
  }
};

/**
 * STEP 5: Delete Book
 */
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return errorResponse(res, 404, "Book not found");
    }

    return successResponse(res, 200, "Book deleted successfully");
  } catch (error) {
    return errorResponse(res, 500, "Failed to delete book", error.message);
  }
};
