import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <span>
      <Navbar/>
      <div>
        <Button variant="contained" color="inherit" size="large" fullWidth className={classes.button}>
          <Link to="/usersignup">User panel</Link>
        </Button>


        <Button variant="contained" color="inherit" size="large" fullWidth className={classes.button}>
          <Link to="/resturantsignup">User panel</Link>
        </Button>
      </div>
    </span>

  );
}
