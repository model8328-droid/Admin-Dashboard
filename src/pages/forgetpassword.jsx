import { Link } from "react-router-dom";

function ForgotPassword() {

return (

<div>

<h1>Forgot Password</h1>

<input type="email"
placeholder="Enter your Email"
/>

<br /><br />

<button>
Send Reset Link
</button>

<br /><br />

<Link to="/">
Back to Login
</Link>

</div>

);

}

export default ForgotPassword;