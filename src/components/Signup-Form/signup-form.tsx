import { Button } from '../Button';
import './signup-form.scss';

const SignupForm = () => {

  return (
    <div className='form-wrap'>
      <div className='form-container'>
        <h2 className='form-title'>Track Your Progress & More!</h2>
        <form className='form'>
          <div className="mb-3">
            <input type="text" className="form-control" id="inputName" aria-describedby="nameHelp"
              placeholder='First Name' />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" id="inputLastName" aria-describedby="nameHelp"
              placeholder='Last Name (optional)'/>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"
              placeholder='Email address' />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="inputPassword" 
              placeholder='Password'/>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="inputPasswordRepeat" 
              placeholder='Re-enter password'/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check" />
            <label className="form-check-label" htmlFor="check">
              Send me email notifications for new program launches, website or store updates (optional)
            </label>
          </div>
          <Button content="Sign Up" type={Button.TYPES.DEFAULT} 
            className='form-btn'/>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;