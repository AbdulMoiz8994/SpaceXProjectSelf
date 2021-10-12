import React from 'react'
import style from './navbar.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import xlaunches from '../../Images/logo192.png'
import {NavLink} from 'react-router-dom'
import Routing from '../../../Route/route'
// type NavbarProps{

// }
          
export const Navbar = () => {
  console.log(Routing);
  
    return (
        <div >
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  className={`${style.mainNavbarDiv}`}>
        <Toolbar className={` ${style.container}`}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>      
               <NavLink to="/">                        
              <img src={xlaunches} alt="logo" width="220px" />
              </NavLink>
         </Typography>
         <NavLink to="/">
          <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink to="/launches">
          <Button color="inherit">Launches</Button>
          </NavLink>
          <NavLink to="/events">
          <Button color="inherit">Events</Button>
          </NavLink>
          <NavLink to="/about">
          <Button color="inherit">About</Button>
          </NavLink>
          {/* <div className={style.links}> */}
            {/* here we make the map for passing the array of routes in navLink comp */}
          {/* </div> */}
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    )
}
