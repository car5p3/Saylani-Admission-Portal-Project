import React from 'react'
import './LoginPage.css'
import { FaUser, FaLock } from 'react-icons/fa'
import image from '../assets/SaylaniPref.png'

const LoginPage = () => {

  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
  }

  return (
    <div style={style} className='main'>
      <div className='wrapper'>
        <form action="">
          <h1>Login</h1>
          <div className="input-box"><input type="text" placeholder='Username.....' required /><FaUser className='icon' /></div>
          <div className="input-box"><input type="password" placeholder='Password.....' required /><FaLock className='icon' /></div>
          <div className="remember-forget">
            {/* <label>
              <input type="checkbox" />
              Remember Me
            </label> */}
            <a href="#">Forget Password?</a>
          </div>
          <button type="submit">Login</button>
          {/* <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default LoginPage