import './login-form.scss';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { GoogleIcon } from '../Icons';
import { 
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect
} from '../utils/firebase';
import { signInAuthUserWithEmailAndPass } from '../utils/firebase/firebase';

type UserLoginForm = {
  email: string;
  password: string;
  signed: string;
};

const LoginForm: FC = () => {

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
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
    formState: { errors }
  } = useForm<UserLoginForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (data: UserLoginForm) => {
    try {
      const response = await signInAuthUserWithEmailAndPass(data.email, data.password);
      console.log(response);
    } catch (error) {
      if (error instanceof Error && error.code === 'auth/wrong-password') {
        setError('password', { 
          message: 'wrong password',
        })
      }
      if (error instanceof Error && error.code === 'auth/user-not-found') {
        setError('email', { 
          message: 'user not found',
        })
      }
    }
  };

  return (
    <div className='form-wrap'>
      <div className='form-container'>
        <h2 className='form-title'>Welcome Back!</h2>
        <form className='form'
          onSubmit={handleSubmit(onSubmit)}>
          
          <div className="mb-3">
            <input type="email" id="email" aria-describedby="emailHelp"
              className={`form-control ${ errors.email ? 'is-invalid' : '' }`}
              placeholder='Email address'
              {...register('email')} />
            <p className='invalid-feedback'>{errors.email?.message}</p>
          </div>

          <div className="mb-3">
            <input type="password" id="password" 
              className={`form-control ${ errors.password ? 'is-invalid' : '' }`}
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

          <button type='submit' className='button form-btn'>
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