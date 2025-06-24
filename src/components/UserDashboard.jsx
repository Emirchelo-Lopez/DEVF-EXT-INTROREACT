import React, { useDeferredValue, useState } from "react";

export default function UserDashboard() {
  // --- STATE VARIABLES ---
  // These states represent the conditions you will use for rendering.
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null); // 'user' is null when logged out
  const [notifications, setNotifications] = useState([]);

  // --- HELPER FUNCTIONS TO TOGGLE STATE ---
  // These buttons will help you test your logic.
  const handleToggleLoading = () => setIsLoading(!isLoading);
  const handleToggleLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({ name: "Alice", preferredName: null, role: "Admin" });
    }
  };

  const handlePreferredName = () => {
    if (user.preferredName) {
      setUser({ name: "Alice", preferredName: null, role: "Admin" });
    } else {
      setUser({ name: "Alice", preferredName: "Aliceminence", role: "Admin" });
    }
  };
  const handleToggleNotifications = () => {
    if (notifications.length > 0) {
      setNotifications([]);
    } else {
      setNotifications([
        "New comment on your post",
        "Your subscription is expiring soon",
      ]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>User Dashboard</h1>

      {/* ~~~ PRACTICE AREA ~~~ */}

      {/* --- 1. Ternary Operator --- */}
      {/* CUE: Use a ternary operator. If 'isLoading' is true, render the 'Loading...' div. */}
      {/* Otherwise, render the main dashboard content inside the <React.Fragment>. */}
      <p>Your content will go here.</p>

      {isLoading ? (
        <div>Loading... Please, wait</div>
      ) : (
        <React.Fragment>
          <h2>Dashboard Content</h2>
          {/* --- 2. Logical && Operator --- */}
          {/* CUE: Use the logical && operator. If a 'user' object exists, render this <div>. */}
          {/* This is the most common way to conditionally render a component or element. */}
          {user && (
            <div>
              <h3>Welcome Message</h3>

              {/* --- 3. Logical || Operator --- */}
              {/* CUE: Use the logical || operator to provide a default/fallback value. */}
              {/* Display the user's `preferredName` if it exists, otherwise default to their `name`. */}
              <p>Welcome back, {user.preferredName || user.name}!</p>
            </div>
          )}
          {/* CUE: Use && again. If 'notifications.length' is greater than 0, render this notifications <div>. */}
          {notifications.length > 0 && (
            <div>
              <p>You have {notifications.length} unread notifications.</p>
            </div>
          )}
          {/* A message for when the user is logged out and not loading */}
          {!user && <p>Please log in to view your dashboard</p>}
        </React.Fragment>
      )}

      {/* ~~~ CONTROL BUTTONS ~~~ */}
      <hr style={{ margin: "20px 0" }} />
      <h3>Controls</h3>
      <button onClick={handleToggleLoading}>Toggle Loading</button>
      <button onClick={handleToggleLogin}>{user ? "Log Out" : "Log In"}</button>
      <button onClick={handleToggleNotifications}>Toggle Notifications</button>
      <button onClick={handlePreferredName}>Toggle Preferred Name</button>
    </div>
  );
}
