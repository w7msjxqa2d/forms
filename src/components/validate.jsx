export default function validate(values) {
  const errors = {};


  // login
  if (!values.login) {
    errors.login = "Login is required";
  } else if (!/^[a-zA-Z0-9]+$/.test(values.login)) {
    errors.login = 'Login is invalid';
  }


  // email
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  // ! country
  if (!values.country) {
    errors.country = "Country is required";
  } 

  //password 
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6){
    errors.password = 'Password must contain at least 6 characters';
  }

  // repeat password 
  if (!values.repeatPassword) {
    errors.repeatPassword = "Repeat your password";
    
  } else if (values.password !== values.repeatPassword){
    errors.password = 'Passwords must must be the same';
  }
  return errors;
}