import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import {Box , Typography , useTheme} from '@mui/material';
import axios from 'axios';
import toast from "react-hot-toast";

const Navbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const loggedIn = JSON.parse(localStorage.getItem("authToken"));

    //handle logout
    const handleLogout = async() => {
      try {
        await axios.post(`http://localhost:8080/api/v1/auth/logout`);
        localStorage.removeItem("authToken");
        toast.success("logout successfully ");
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <Box width={'100%'} p={'1rem 6%'} textAlign={'center'} backgroundColor = {theme.palette.background.alt} sx={{boxShadow:3 , m:2 }}>
      <Typography variant='h1' color= {'primary'} fontWeight='bold'>
           AI Help Website
      </Typography>
         {loggedIn ? (
        <>
          <NavLink to="/" p={1}>
            Home
          </NavLink>
          <NavLink to="/login" onClick={handleLogout} p={1}>
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/register" p={1}>
            Sign Up
          </NavLink>
          <NavLink to="/login" p={1}>
            Sign In
          </NavLink>
        </>
      )}
    </Box>
  )
}

export default Navbar