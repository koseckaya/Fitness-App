import './FormInput.scss';

import { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

type FormInputProps = {
  name: string;
}