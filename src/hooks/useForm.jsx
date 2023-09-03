import { useState } from "react";

export const useForm = (initialForm = {}) => {
  // {
  //     username: '',
  //     email: '',
  //     password: '',
  // }
  const [formState, setFormState] = useState(initialForm);

  // const { username, email, password } = formState;  // al no saber exactamente que traera initialForm no tiene sentido desestructurar

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    // console.log( {name, value} );
    // console.log(event.target.value);
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
