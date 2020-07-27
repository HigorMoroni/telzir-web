import React from 'react';
import { Container, Typography, Box, Link } from '@material-ui/core';
import { Instagram, Facebook, Twitter, LinkedIn, WhatsApp } from '@material-ui/icons';

import Logo from '../images/telzir-logo.png';

const Footer = ({ estilo }) => {
  const classes = estilo;
  return (
    <Container 
      id="contato"
      maxWidth="md"
      component="footer"
      className={classes.footer}
    >
      <Typography variant="body2" color="textSecondary" align="center">
        <img src={Logo} alt="Telzir" className={classes.logoImage}/><br/>
        <Link color="primary" target="_blank" href="https://www.linkedin.com/in/higormoroni/">
          <LinkedIn className={classes.socialIcon}/>
        </Link>
        <Link color="primary" target="_blank" href="https://api.whatsapp.com/send?phone=5513988685814">
          <WhatsApp className={classes.socialIcon}/>
        </Link>
        <Link color="primary" target="_blank" href="#">
          <Twitter className={classes.socialIcon}/>
        </Link>
        <Link color="primary" target="_blank" href="#">
          <Instagram className={classes.socialIcon}/>
        </Link>
        <Link color="primary" target="_blank" href="#">
          <Facebook className={classes.socialIcon}/>
        </Link>
      </Typography>
      <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="primary" target="_blank" href="https://higor.tech/">
            {`Telzir `}
          </Link>
          {`${new Date().getFullYear()}.`}
        </Typography>
      </Box>
    </Container>
  )
}

export default Footer;