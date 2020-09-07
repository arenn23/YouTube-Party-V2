import React from 'react';
import googleButton from '../Images/btn_google_signin_light_normal_web.png';
import { Link } from 'react-router-dom';

//"Sign in with Google" button component.
//Used in Login.js and CreateAccount.js.
//Routes back to Landing component.

export const GoogleApiButton = () => {
  return (
    <Link to="/">
      <img className="google" src={googleButton} alt="Google API button" />
    </Link>
  );
};
