import React from 'react';
import LoginIcon from '../image/undraw_team_up_re_84ok.svg';

function Login() {
  return (
    <div className='main'>
        <section className="left container">
            <img className="image" src={LoginIcon} alt="Icon"/>
        </section>
        <section className="right container">
            <form id="login-form" action="#">
                <h2>Admin Sign In</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"/>
                </div>
                <div id="remember-me-con">
                    <input type="checkbox" id="remember-me"/>
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <div id="button-con">
                    <button type="submit">Login</button>
                </div>
                <a href="#" id="forgot-password">Forgot password</a>
            </form>
        </section>
    </div>
  )
}

export default Login
