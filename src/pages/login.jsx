import { Link } from "react-router-dom";

function Login() {

return (

<div>

<h1>Login Page</h1>

<input type="email" placeholder="Email" />

<br /><br />

<input type="password" placeholder="Password" />

<br /><br />

<Link to="/dashboard">

<button>Login</button>

</Link>

<br /><br />

<Link to="/register">
Register
</Link>

<br /><br />

<Link to="/forgot-password">
Forgot Password
</Link>

</div>

);

}

export default Login;