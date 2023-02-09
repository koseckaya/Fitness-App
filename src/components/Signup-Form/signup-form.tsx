import './signup-form.scss';
import '../Button/Button.scss'
import { GoogleIcon } from '../Icons';


import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { 
  auth,
  createUserDocFromAuth, 
  signInWithGoogleRedirect,
  createAuthUserWithEmailAndPass,
  signInWithGooglePopup,
} from '../utils/firebase';
import { getRedirectResult } from 'firebase/auth';


type UserSubmitForm = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  emailSubscription: boolean;
};

const SignupForm: FC = () => {

  useEffect(() => {
    async function fetchData() {
      const response = await getRedirectResult(auth);

      if (response) {
        const userDocRef = await createUserDocFromAuth(response.user);
      }
    };

    fetchData();
  }, [])

  const logGoogleUser = async () => {
    const { user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required')
      .min(4, 'Name must be at least 4 characters')
      .max(20, 'Name must not exceed 20 characters'),
    lastName: Yup.string().optional(),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must not exceed 20 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    emailSubscription: Yup.bool().optional()
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (data: UserSubmitForm) => {
    if (!data) return;
    try {
      const response = await createAuthUserWithEmailAndPass(data.email, data.password);
      console.log(response);
      if (!response) return;
      const user = response.user;
      await createUserDocFromAuth(user, { displayName: data.name });
    } catch (error) {
      if (error instanceof Error && error.code === 'auth/email-already-in-use') {
        console.log('User already in use');
      }
      console.log('user create encountered an error', error);
    }
    reset();
  };

  return (
    <div className='form-wrap'>
      <div className='form-container'>
        <h2 className='form-title'>Track Your Progress & More!</h2>
        <form className='form'
          onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-3">
            <input type="text" id="name" aria-describedby="nameHelp"
              className={`form-control ${ errors.name ? 'is-invalid' : '' }`}
              placeholder='First Name'
              {...register('name')} />
            <p className='invalid-feedback'>{errors.name?.message}</p>
          </div>

          <div className="mb-3">
            <input type="text" id="lastName" aria-describedby="nameHelp"
              className={`form-control ${ errors.lastName ? 'is-invalid' : '' }`}
              placeholder='Last Name (optional)'
              {...register('lastName')} />
            <p className='invalid-feedback'>{errors.lastName?.message}</p>
          </div>

          <div className="mb-3">
            <input type="email" id="email" aria-describedby="emailHelp"
              className={`form-control ${ errors.email ? 'is-invalid' : '' }`}
              placeholder='Email address'
              {...register('email')} />
            <p className='invalid-feedback'>{errors.email?.message}</p>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <input type="password" id="password" 
              className={`form-control ${ errors.password ? 'is-invalid' : '' }`}
              placeholder='Password'
              {...register('password')} />
            <p className='invalid-feedback'>{errors.password?.message}</p>
          </div>

          <div className="mb-3">
            <input type="password" id="confirmPassword"
              className={`form-control ${ errors.confirmPassword ? 'is-invalid' : '' }`}
              placeholder='Re-enter password'
              {...register('confirmPassword')}/>
            <p className='invalid-feedback'>{errors.confirmPassword?.message}</p>
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" id="emailSubscription"
              className={`form-check-input ${ errors.emailSubscription ? 'is-invalid' : '' }`}
              {...register('emailSubscription')} />
            <label htmlFor="emailSubscription" className="form-check-label">
              Send me email notifications for new program launches, website or store updates (optional)
            </label>
          </div>

          <button type='submit' className='button form-btn'>
            Create account
          </button>
          
          <div className='form-delimiter'>or</div>
          <button type='button' className='button form-btn form-btn-google'
            onClick={ signInWithGoogleRedirect }>
            <GoogleIcon className='form-google-icon'/>
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;