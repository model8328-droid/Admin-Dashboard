import { Link } from "react-router-dom";

function Register() {

return (

<div>

<h1>Register Page</h1>

<input type="text" placeholder="Name" />

<br /><br />

<input type="email" placeholder="Email" />

<br /><br />

<input type="password" placeholder="Password" />

<br /><br />

<button>
Register
</button>

<br /><br />

<Link to="/">
Back to Login
</Link>

</div>

);

}

export default Register;