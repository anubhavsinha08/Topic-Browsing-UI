# Catalogue Management System – Topic Browsing UI

This project is a simple React (Vite) application created as part of the Catalogue Management System assignment.  
The main objective of the project is to implement a topic browsing interface where the user can search topics by name and view the results in a clean card layout.

The project is kept small, easy to understand, and follows a component-based approach.


## Purpose of the Project

The application demonstrates the following:
1. A search input for filtering topics by name (case-insensitive).
2. A reusable TopicCard component to display each topic.
3. Proper state management using React useState.
4. Showing a “No Topics Found” message when the search returns no results.
5. Clean and simple UI using basic CSS.
6. Understanding of props, state, and component interaction.

---

## Folder Structure

The project was built using Vite, so the file structure looks like this:

topic-browsing-ui/
│
├── public/
│
├── src/
│ ├── assets/
│ ├── App.css
│ ├── App.jsx
│ ├── cards.jsx
│ ├── index.css
│ ├── main.jsx
│ └── topicSearch.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

## How the Application Works

### App.jsx  
- Holds the main search state (`topic`).
- Filters the topic list using JavaScript’s `filter()` method.
- Renders the TopicCard components for each matching topic.
- If no topic matches, a "No Topics Found" message is shown.

### topicSearch.jsx  
- Contains the search input field.
- It is a controlled component and receives `topic` and `onSearch` from App.
- Every time the user types, it updates the search state in App.

### cards.jsx  
- Displays topic details inside a simple card layout.
- Used inside the `map()` function with a unique key.

---

##  Installation & Running the Project
git clone https://github.com/anubhavsinha08/Topic-Browsing-UI.git
cd topic-browsing-ui

### Step 1: Install dependencies
npm install

### Step 2: Start the development server
npm run dev


### Video Explaination
https://drive.google.com/file/d/1ROmZ2iU3tt7DtXVw4Y4LbDr4sWqAid56/view?usp=sharing