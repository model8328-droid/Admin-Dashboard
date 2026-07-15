import { useState } from "react";

function Settings() {
const [darkMode, setDarkMode] = useState(false);
const [notifications, setNotifications] = useState(true);

return (
<div>
<h1>Settings</h1>

<h3>Theme Switch</h3>

<button
onClick={() => setDarkMode(!darkMode)}
>
{darkMode ? "Light Mode" : "Dark Mode"}
</button>

<h3>Notifications</h3>

<input
type="checkbox"
checked={notifications}
onChange={() =>
setNotifications(!notifications)
}
/>

<p>
Notifications {notifications ? "ON" : "OFF"}
</p>

<h3>Account Settings</h3>

<input
type="text"
placeholder="Username"
/>

<br /><br />

<input
type="email"
placeholder="Email"
/>

<br /><br />

<button>Save Settings</button>
</div>
);
}

export default Settings;