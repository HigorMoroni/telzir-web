import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { Link as LinkRoute, Redirect } from 'react-router-dom';

import Logo from '../images/telzir-logo.png';

const Menu = ({estilo}) => {
  const city = localStorage.getItem('@telzir-app/city');

  if (city === null) return <Redirect to="/localidade" />;

  const classes = estilo;
  return (
    <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link href="#">
            <img src={Logo} alt="Telzir" className={classes.logoImage}/>
          </Link> 
        </Typography>
        <nav className={classes.navLinks}>
          <Link variant="button" color="textPrimary" href="#novidades" className={classes.link}>
            Novidades
          </Link>
          <Link variant="button" color="textPrimary" href="#falemais" className={classes.link}>
            FaleMais
          </Link>
          <Link variant="button" color="textPrimary" href="#contato" className={classes.link}>
            Contato
          </Link>
        </nav>
        <LinkRoute to="/localidade">
          <Button color="primary" variant="contained" endIcon={<ExpandMore />} className={classes.button}>
            {city}
          </Button>
        </LinkRoute>
      </Toolbar>
    </AppBar>
  )
}

export default Menu;