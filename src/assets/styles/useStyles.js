import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  splash: {
    marginTop: '8%',
    marginLeft: '20%',
    marginRight: '20%',
  },
  logoSplash: {
    width: 250,
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
  },
  comboBox: {
    width: '100%',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
  button: {
    float: 'right',
  },
  buttonForm: {
    margin: theme.spacing(4,'40%'),
    width: '20%',
    [theme.breakpoints.down('sm')]: {
      width: '60%',
      margin: theme.spacing(4,'20%'),
    }
  },
  whatsapp: {
    position: 'sticky',
    backgroundColor: '#25d366',
    color: 'white',
    float: 'right',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    '&:hover': {
      backgroundColor: '#128c7e'
      ,
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  logoImage: {
    height: 50,
    marginTop: 10,
    [theme.breakpoints.down('md')]: {
      marginLeft: '30%'
    }
  },
  link: {
    margin: theme.spacing(1, 2),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(1, 3),
    }
  },
  navLinks: {
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(12),
    }
  },
  banner: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100vh - 70px)',
      marginTop: '70px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '105px'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '130px'
    }
  },
  paginacao: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    flexDirection: 'row',
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(8, 2, 6)
    }
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  simulation: {
    marginTop: 30
  },
  formControl: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '60%',
      marginLeft: '20%'
    }
  },
  formResult: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '16%'
    }
  },
  logoForm: {
    width: '60%',
    maxWidth: 180
  },
  socialIcon: {
    margin: theme.spacing(2, 4, 0, 4),
    color: '#0D3858'
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default useStyles;