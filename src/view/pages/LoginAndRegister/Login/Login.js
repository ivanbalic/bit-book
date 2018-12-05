import React from 'react';


const Login = () => {
    return (
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>

            <button type="submit" class="btn btn-primary col-12">Login</button>
        </form>
        // {/* <div className="row">
        //     <label className="col-12">Email<input type="email" className="col-12" /></label>
        //     <label className="col-12">Password<input type="password" className="col-12" /></label>
        //     <button>Login</button>
        // </div> */}
    )
}

export default Login;