import '../../components/Signup-Form/signup-form.scss';
import '../../components/Button/Button.scss'

import { FC, useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { 
  AdditionalInformation,
  getUserDocFromAuth
} from '../../components/utils/firebase/firebase';
import { User } from 'firebase/auth';
import { UserContext } from '../../components/utils/contexts';

type UserSubmitForm = {
  name: string;
  lastName?: string;
};

export const Profile: FC = () => {
  const { currentUser } = useContext(UserContext);
  const userData = useUserData(currentUser);

  const validationSchema = Yup.object().shape({
    name: Yup.string().optional()
      .min(3, 'Name must be at least 4 characters')
      .max(20, 'Name must not exceed 20 characters'),
    lastName: Yup.string().optional()
      .min(3, 'Name must be at least 4 characters')
      .max(20, 'Name must not exceed 20 characters'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (data: UserSubmitForm) => {
    if (!data) return;
/*  try {
      const response = await createAuthUserWithEmailAndPass(data.email, data.password);
      const user = response?.user;
      if (user) await createUserDocFromAuth(user, { displayName: data.name, lastName: data.lastName });
    } catch (error) {
      if (error instanceof Error && error.code === 'auth/email-already-in-use') {
        console.log('User already in use');
      }
      console.log('user create encountered an error', error);
    } */
    reset();
  };

  return (
    <div className='form-wrap'>
      <div className='form-container'>
        <h2 className='form-title'>Personal Info</h2>
        <form className='form__auth'
          onSubmit={handleSubmit(onSubmit)}>
          <p>Your Name</p>
          <div>
            <div className="mb-3">
              <input type="text" id="name" aria-describedby="nameHelp"
                className={`form-control__auth ${ errors.name ? 'is-invalid' : '' }`}
                placeholder='First Name'
                defaultValue={userData?.displayName}
                {...register('name')} />
              <p className='invalid-feedback'>{errors.name?.message}</p>
            </div>
            
            <div className="mb-3">
              <input type="text" id="lastName" aria-describedby="nameHelp"
                className={`form-control__auth ${ errors.lastName ? 'is-invalid' : '' }`}
                placeholder='Last Name'
                defaultValue={userData?.lastName}
                {...register('lastName')} />
              <p className='invalid-feedback'>{errors.lastName?.message}</p>
            </div>
          </div>
          <div>
            <button type='button' className='button form-btn'>
              Cancel
            </button>
            <button type='submit' className='button form-btn'>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function useUserData(currentUser: User | null) {
  const [data, setUserData] = useState<AdditionalInformation | null>(null);
  
  useEffect(() => {
    async function startFetching() {
      setUserData(null);
      try {
        if (!currentUser) return;
        const result = await getUserDocFromAuth(currentUser);
        if (!ignore && result) {
          setUserData(result);
        } 
      } catch (error) {
        if (error instanceof Error) {
          console.log('Error with get user', error.code);
        }
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    }
  }, [currentUser]);

  return data;
}

export default Profile;