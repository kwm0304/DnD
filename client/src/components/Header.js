import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Utils/auth';

const Header = ({ value, handleInputChange, handleFormSubmit }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header id="header">
      <div id="nav">
        <div style={{ marginLeft: "20px", display: "flex", flexDirection: "column" }}>
          <Link className="text-light" style={{ textDecoration: "none" }} to="/">
            <h1 className="m-0"> D&D Slayers</h1>
          </Link>
          <p style={{ color: "red" }}>We're Gonna Need a Bigger Bad Guy</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <div id="buttonLayout">
              <Link className="btn btn-lg btn-info m-2" to="/"> Home </Link>
              <Link className="btn btn-lg btn-info m-2" to="/Profile">
                {Auth.getProfile().data.username}'s Profile
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/CharacterSheet">Create Character</Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>

            </div>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/Login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/Signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;