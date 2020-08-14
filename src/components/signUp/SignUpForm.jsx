import React,{ useState } from 'react';
import { Link } from '@reach/router';
import './style.css';
import useForm from '../useForm';
import validate from './../validate';

export default function SignUpForm() {
  const { 
    handleChange,
    handleSubmit,
    setValues,
    values,
    errors
  } = useForm(submit, validate);

  function submit() {
    console.log("Submitted Succesfully!")
  }

  const countries = [
    {name: 'all', value:'All'},
    {name: 'USA', value:'USA'},
    {name: 'Russia', value:'Russia'}
  ];
  const [select, setSelect] = useState(countries[0].value);
  return (
    <form className='form-signUp' onSubmit={handleSubmit} noValidate>
      <h3>Sign Up</h3>
      <label className="label">
        Login
        <input
          className='form-signUp__input u-full-width'
          name="login"
          autoComplete="off" 
          type="text"
          value={values.login}
          onChange={handleChange}
        />
        {errors.login && <span className="text-danger passwordError">{errors.login}</span>}
      </label>
      <label className="label">
        Email
        <input 
          className='form-signUp__input u-full-width' 
          name="email" 
          autoComplete="off" 
          type="text"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <span className="text-danger passwordError">{errors.email}</span>}
      </label>

      <label className="label">
        Country
        <select
          className="u-full-width form-signUp__select"
          id="select"
          value={select.value}
          onChange={handleChange}
        >
          <option>All</option>
          {countries.map((item) => (<option key={item.value} value={item.value}>{item.name}</option>))}
        </select>
        {errors.country && <span className="text-danger passwordError">{errors.country}</span>}
      </label>
      <label className="label">
        Password
        <input 
          className='form-signUp__input u-full-width' 
          name="password" 
          label="Password" 
          type="Password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <span className="text-danger passwordError">{errors.password}</span>}
      </label>
      <label className="label">
        Repeat Password
        <input 
          className='form-signUp__input u-full-width' 
          label="Password" 
          name="repeatPassword" 
          type="Password"
          value={values.repeatPassword}
          onChange={handleChange}
        />
        {errors.repeatPassword && <span className="text-danger passwordError">{errors.repeatPassword}</span>}
      </label>
      <span class="form-signIn__isregistered">Already have an account? <Link to='/signIn'>Sign In</Link></span>
      <button
        className="button-primary"
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}

