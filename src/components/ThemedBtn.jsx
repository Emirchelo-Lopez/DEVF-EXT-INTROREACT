// 3. Import the context you created.

export default function ThemedButton() {
  // 4. Use the useContext hook to get the theme value.
  const theme = "???"; // Replace this with the context value

  return <button>Current theme: {theme}</button>;
}
