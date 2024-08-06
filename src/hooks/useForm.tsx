// import { ChangeEvent, useState } from 'react';

// export const useForm = (initialState = {}) => {
//   const [values, setValues] = useState(initialState);

//   const reset = (newFormState = initialState) => {
//     setValues(newFormState);
//   };

//   const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
//     setValues({
//       ...values,
//       [target.name]: target.value,
//     });
//   };

//   return [values, handleInputChange, reset];
// };

import { ChangeEvent, useState } from 'react';

export function useForm<T extends Record<string, string>>(initialState: T) {
  const [values, setValues] = useState<T>(initialState);

  const reset = (newFormState: T = initialState) => {
    setValues(newFormState);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return [values, handleInputChange, reset] as const;
}
