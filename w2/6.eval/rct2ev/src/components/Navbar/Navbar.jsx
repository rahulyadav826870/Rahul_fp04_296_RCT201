import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../hoc/RequiredAuth";
import {useContext} from "react"

const Navbar = () => {

  const {isAuth,logout} =useContext(AuthContext)

  const navigate =useNavigate()

  const handleloginCheck=()=>{
    if(isAuth){
      logout()
    }else{
      navigate("/login")
    }
  }

  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <a data-cy="navbar-home-link"><Link to=""> Home</Link>   </a> 
      </div>
      <div>
        <div data-cy="navbar-cart-items-count"></div>
        <button data-cy-="navbar-login-logout-button" onClick={handleloginCheck}>

          {
            isAuth ? "Logout" :"Login"
          }
        </button>
      </div>
    </div>
  );
};

export default Navbar;
