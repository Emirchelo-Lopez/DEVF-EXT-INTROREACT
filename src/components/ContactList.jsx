import React from "react";
// 3. You will need to import the ContactCard component here.

// 4. This component needs to accept `props`.
export default function ContactList() {
  // 5. Get the array of contacts from props. Then, use the .map() method
  // to create a new <ContactCard /> for each contact in the array.
  // Don't forget to pass the contact's data down to the card as props!
  // And remember that lists in React need a unique `key` prop.

  return (
    <div className="contact-list">
      {/* The list of contact cards will be rendered here. */}
    </div>
  );
}
