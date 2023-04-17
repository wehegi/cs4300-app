import React from 'react';
function Login (){
    return(
        <div>
            <h3>Login</h3>
        <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="Submit">Submit</button>
      </div>
      <div>
        <button type="Logout">Logout</button>
      </div>
    </form>
    </div>
    )
}

export default Login;
