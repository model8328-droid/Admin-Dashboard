import { useState } from "react";

function Profile() {
const [name, setName] = useState("Admin");
const [email, setEmail] = useState("admin@gmail.com");

return (
<div>
<h1>Profile</h1>

<h3>Update Profile</h3>

<input
value={name}
onChange={(e) => setName(e.target.value)}
/>

<br /><br />

<input
value={email}
onChange={(e) => setEmail(e.target.value)}
/>

<br /><br />

<button>Update Profile</button>

<h3>Change Password</h3>

<input type="password" placeholder="Old Password" />

<br /><br />

<input type="password" placeholder="New Password" />

<br /><br />

<button>Change Password</button>
</div>
);
}

export default Profile;