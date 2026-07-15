import { useState } from "react";

function Users() {
const [users, setUsers] = useState([
{ id: 1, name: "Ali", email: "ali@gmail.com" },
{ id: 2, name: "Ahmed", email: "ahmed@gmail.com" },
]);

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [search, setSearch] = useState("");

const addUser = () => {
if (!name || !email) return;

setUsers([
...users,
{
id: Date.now(),
name,
email,
},
]);

setName("");
setEmail("");
};

const deleteUser = (id) => {
setUsers(users.filter((user) => user.id !== id));
};

return (
<div>
<h1>User Management</h1>

<h3>Add User</h3>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>

<br /><br />

<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>

<br /><br />

<button onClick={addUser}>Add User</button>

<br /><br />

<input
type="text"
placeholder="Search User"
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

<h3>Users List</h3>

{users
.filter((user) =>
user.name.toLowerCase().includes(search.toLowerCase())
)
.map((user) => (
<div key={user.id}>
<p>{user.name}</p>
<p>{user.email}</p>

<button onClick={() => deleteUser(user.id)}>
Delete
</button>

<hr />
</div>
))}
</div>
);
}

export default Users;