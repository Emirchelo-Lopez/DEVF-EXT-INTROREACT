function Message({ text }) {
  // Only render the paragraph if there is a message to show
  if (!text) {
    return null;
  }

  return <p>{text}</p>;
}

export default Message;
