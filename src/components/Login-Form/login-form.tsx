import { Button } from '../Button';
import './login-form.scss';

const LoginForm = () => {

  return (
    <div className='form-wrap'>
      <div className='form-container'>
        <h2 className='form-title'>Welcome Back!</h2>
        <form className='form'>
          <div className="mb-3">
            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"
              placeholder='Email address' />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="inputPassword" 
              placeholder='Password'/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check" />
            <label className="form-check-label" htmlFor="check">
              Keep me signed in
            </label>
          </div>
          <Button content="Sign Up" type={Button.TYPES.DEFAULT} 
            className='form-btn'/>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;