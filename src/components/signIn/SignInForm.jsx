import React,{ useState } from 'react';
import { Link } from "@reach/router"
import './style.css';
import useForm from './../useForm';
import validate from './../validate';

export default function SignInForm() {

  const { 
    handleChange,
    handleSubmit,
    values,
    errors
  } = useForm(submit, validate);

  function submit() {
    console.log("Submitted Succesfully!")
  }
  return (
    <form className='form-signIn' onSubmit={handleSubmit} noValidate>
      <h3>Sign In</h3>
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
        {errors.password && <span className="text-danger passwordError">{errors.login}</span>}
      </label>
      <label className="label">
        Password
          <input 
          name='password'
          className='form-signIn__input u-full-width' 
          label="Password" 
          type="Password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <span className="text-danger passwordError">{errors.password}</span>}
      </label>
      <span class="form-signIn__isregistered">Not registeret yet? <Link to="/">Sign Up</Link></span>      
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

