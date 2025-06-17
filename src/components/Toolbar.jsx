import ThemedButton from "./ThemedBtn";

// This component acts as a middle-man that doesn't need the theme itself.
export default function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}
