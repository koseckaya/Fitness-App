import './login-form.scss';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type UserLoginForm = {
  email: string;
  password: string;
  signed: string;
};

const LoginForm: FC = () => {

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must not exceed 40 characters'),
    signed: Yup.bool().optional(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserLoginForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: UserLoginForm) => {
    console.log(JSON.stringify(data, null, 2));
    reset();
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
            <input type="checkbox" id="acceptTerms"
              className='form-check-input'
              {...register('signed')} />
            <label htmlFor="acceptTerms"
              className='form-check-label'>
              Keep me signed in
            </label>
          </div>

          <button type='submit' className='button form-btn'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;