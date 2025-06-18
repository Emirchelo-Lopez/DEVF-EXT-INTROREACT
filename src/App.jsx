import React from "react";
// 1. You will need to import the ContactList component here.
import "./App.css";

// This is our source of data.
const contactData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "234-567-8901",
  },
  {
    id: 3,
    name: "Peter Jones",
    email: "peter.jones@example.com",
    phone: "345-678-9012",
  },
];

export default function App() {
  return (
    <div className="App">
      <h1>My Contact List</h1>
      {/* 2. Render the ContactList component here. */}
      {/* How do you pass the `contactData` array to it as a prop? */}
    </div>
  );
}
