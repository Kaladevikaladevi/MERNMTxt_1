import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getBooks = (page = 1) =>
  API.get(`/books?page=${page}`);

export const createBook = (data) =>
  API.post("/books", data);

export const updateBook = (id, data) =>
  API.put(`/books/${id}`, data);

export const deleteBook = (id) =>
  API.delete(`/books/${id}`);
