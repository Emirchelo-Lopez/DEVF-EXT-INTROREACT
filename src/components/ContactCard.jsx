// 6. This component also needs to accept props (like name, email, phone).
export default function ContactCard({ name, email, phone }) {
  return (
    <div className="contact-card">
      {/* 7. Display the contact's name, email, and phone number, which you get from props. */}
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}
