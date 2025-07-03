function InputNumber({ value, onChange, onSubmit }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      placeholder="Enter your guess"
    />
  );
}

export default InputNumber;
