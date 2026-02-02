# MERN Machine Test Project

This repository contains solutions for a MERN-based machine test, including algorithm challenges, ES6 OOP tasks, and a full-stack Books CRUD application with React + Vite frontend and Node + Express + MongoDB backend.

---

## Project Structure

/algorithms # JS solutions for algorithm problems (Q1-Q3)
/oop # ES6 OOP solution (Q4)
/server # Node + Express + MongoDB backend (Q5)
/client # React + Vite frontend (Q5)
/README.md # Project documentation

---

## Q1: Arrays in Range [1..n] — Find Missing and Duplicates

**Problem:**  
Given an integer array `nums` of length `n` with numbers in `[1, n]`, find missing and duplicate numbers.

**Functions:**

```javascript
// Return all missing numbers
function findMissing(nums) {}

// Return all duplicate numbers
function findDuplicates(nums) {}
Constraints:

Time: O(n)

Space: O(1) (ignoring result lists)

Example:

javascript
const nums = [4, 3, 2, 7, 8, 2, 3, 1];

findMissing(nums);    // [5, 6]
findDuplicates(nums); // [2, 3]
Q2: Palindrome Number Check
Function:

javascript
function isPalindromeNumber(x) {}
Requirement:

Do not convert number to string

Include Jest tests with at least 5 cases

Example:

javascript
isPalindromeNumber(121);  // true
isPalindromeNumber(123);  // false
Q3: Center-Aligned Number Pyramid
Task:
Print a center-aligned number pyramid for an odd integer n (1 ≤ n ≤ 31).

Example for n = 5:

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
Validation:

Only odd integers allowed

Print error message for invalid input

Q4: ES6 OOP – Students, HOD, and College
Classes:

Student

HOD extends Student

Methods:

javascript
setStudent(name)
setHod(name)
setCollege(name)
info() // formatted output
CLI Input Example:

node index.js --student "Alice" --hod "Dr. Smith" --college "ABC College"
Q5: MERN CRUD – Books API + React UI
Backend (Node + Express + MongoDB)
Book model: title, author, publishedDate, createdAt

CRUD APIs: GET all (pagination), POST, GET by ID, PUT, DELETE

Validation using express-validator

Centralized error handling

.env.sample for environment variables

Tested with Postman / Thunder Client

Start Backend:
cd server
npm install
cp .env.sample .env   # configure MongoDB URI
npm run dev
API Endpoints:

Method	Endpoint	Description
GET	/api/books	Get all books (with pagination)
POST	/api/books	Create a book
GET	/api/books/:id	Get book by ID
PUT	/api/books/:id	Update book
DELETE	/api/books/:id	Delete book

Frontend (React + Vite)
Pages: BooksList, BookForm

Features: display list, add, edit, delete, pagination, validation, loading & error states

Start Frontend:
cd client
npm install
cp .env.sample .env   # configure VITE_API_URL
npm run dev
Navigate:
Open http://localhost:5173

Setup Steps (Full Project)
Clone the repository:

git clone <repo-url>
cd <repo-directory>
Install backend dependencies and configure .env:

cd server
npm install
cp .env.sample .env
# update MONGO_URI
npm run dev
Install frontend dependencies and configure .env:

cd client
npm install
cp .env.sample .env
# update VITE_API_URL
npm run dev
Open frontend in browser: http://localhost:5173
