import './login-form.scss';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { GoogleIcon } from '../Icons';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPass } from '../utils/firebase/firebase';
import { useNavigate } from 'react-router-dom';

type UserLoginForm = {
  email: string;
  password: string;
  signed: string;
};

const LoginForm: FC = () => {

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate('/');
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must not exceed 20 characters'),
    signed: Yup.bool().optional(),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid }
  } = useForm<UserLoginForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (data: UserLoginForm) => {
    try {
      await signInAuthUserWithEmailAndPass(data.email, data.password);
      navigate('/');
    } catch (error: unknown) {

      switch (error instanceof Error && error.code) {
        case 'auth/wrong-password': 
          setError('password', { 
            message: 'Wrong password',
          });
          break;
        case 'auth/user-not-found': 
          setError('email', { 
            message: 'User not found',
          })
        break;
        case 'auth/too-many-requests': 
          setError('email', { 
            message: 'Too many requests',
          });
        break;
        default: 
          console.log(error);
      }
    }
  };

  return (
    <div className='form-wrap'>
      <div className='form-container'>
        <h2 className='form-title'>Welcome Back!</h2>
        <form className='form__auth'
          onSubmit={handleSubmit(onSubmit)}>
          
          <div className="mb-3">
            <input type="email" id="email" aria-describedby="emailHelp"
              className={`form-control__auth ${ errors.email ? 'is-invalid' : '' }`}
              placeholder='Email address'
              {...register('email')} />
            <p className='invalid-feedback'>{errors.email?.message}</p>
          </div>

          <div className="mb-3">
            <input type="password" id="password" 
              className={`form-control__auth ${ errors.password ? 'is-invalid' : '' }`}
              placeholder='Password'
              {...register('password')} />
            <p className='invalid-feedback'>{errors.password?.message}</p>
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" id="signed" className='form-check-input'
              {...register('signed')} />
            <label htmlFor="signed" className='form-check-label'>
              Keep me signed in
            </label>
          </div>

          <button type='submit' className='button form-btn'
            disabled={!isValid}>
            Log in
          </button>
          
          <div className='form-delimiter'>or</div>
          <button type='button' className='button form-btn form-btn-google'
            onClick={ signInWithGoogle }>
            <GoogleIcon className='form-google-icon'/>
            Log in with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;