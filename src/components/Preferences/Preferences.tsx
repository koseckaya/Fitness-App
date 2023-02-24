import './Preferences.scss';

import { FC, useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  AdditionalInformation,
  getUserDocFromAuth,
  updateUserDocFromAuth,
} from '../../components/utils/firebase/firebase';
import { UserContext } from '../../components/utils/contexts';
import { User } from 'firebase/auth';
import { Timestamp } from 'firebase/firestore';

type UserSubmitForm = {
  name: string;
  lastName?: string;
};

export const Preferences: FC = () => {
  const { currentUser } = useContext(UserContext);
  const userData = useUserData(currentUser);
  const date = useDateConverted(userData?.createdAt as Timestamp);

  const validationSchema = Yup.object().shape({
    name: Yup.string().optional()
      .min(3, 'Name must be at least 3 characters')
      .max(20, 'Name must not exceed 20 characters'),
    lastName: Yup.string().optional()
      .min(3, 'Last name must be at least 3 characters')
      .max(20, 'Last name must not exceed 20 characters')
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (data: UserSubmitForm) => {
    if (!data) return;
    try {
      if (currentUser) {
        await updateUserDocFromAuth(currentUser, { displayName: data.name, lastName: data.lastName });
        reset({'lastName': data.lastName, 'name': data.name});
      }
    } catch (error) {
      console.log('user create encountered an error', error);
    }
  };

  const resetData = async () => {
    reset();
  };

  return (
    <div className='form-wrap'>
      <div className='form-container'>
        <form className='form__auth'
          onSubmit={handleSubmit(onSubmit)}>
          <p className='form__auth-subtitle'>Your Name</p>
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
          <div className='form-btn__container'>
            <button type='button' className='button form-btn form-btn__default'
              onClick={resetData}
              disabled={!isDirty && !isValid}>
              Cancel
            </button>
            <button type='submit' className='button form-btn'
              disabled={!isDirty && !isValid}>
              Save Changes
            </button>
          </div>
          <div>
            <p className='form__auth-subtitle'>Email Address</p>
            <p className='auth__text'>Your email address is
              <span className='auth__text-secondary'>{userData?.email}</span>
            </p>
          </div>
          <div>
            <p className='form__auth-subtitle'>Account created</p>
            <p className='auth__text'>Time of creation
              <span className='auth__text-secondary'>{ date }</span>
            </p>
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

export function useDateConverted(userDate: Timestamp | null) {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    async function startFetching() {
      setDate(null);
      try {
        if (!userDate) return;
        const fieldVal = (userDate as Timestamp);
        const timeStamp = new Timestamp(fieldVal.seconds,
          fieldVal.nanoseconds);
        const dateCreatedAt = timeStamp.toDate().toLocaleDateString();

        if (!ignore && dateCreatedAt) {
          setDate(dateCreatedAt);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log('Error with get date', error.code);
        }
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    }
  }, [userDate]);

  return date;
}
