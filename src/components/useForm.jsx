import {
  useState,
  useEffect
} from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    login: "",
    email: "",
    country: "",
    password: "",
    repeatPassword: ""
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const {
      name,
      value
    } = event.target;
    console.log(name);
    setValues({
      ...values,
      [name]: value
    })
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(values).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors, isSubmitting, values]);

  return {
    handleChange,
    handleSubmit,
    setValues,
    values,
    errors
  }

};

export default useForm;