import React from "react";

// 6. This component also needs to accept props (like name, email, phone).
export default function ContactCard() {
  return (
    <div className="contact-card">
      {/* 7. Display the contact's name, email, and phone number, which you get from props. */}
      <h3>Contact Name</h3>
      <p>Email: contact.email@example.com</p>
      <p>Phone: 555-555-5555</p>
    </div>
  );
}
