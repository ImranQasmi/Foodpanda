import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../redux/actions/authAction';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    color: "white !important",
    textDecoration: "none"
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();
  const pathname = props.history.location.pathname;
  console.log("props in header", props)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Foodpanda
          </Typography>
            {
              props.user? <Button color="inherit" onClick = {() =>props.signOut()}>Logout</Button> : pathname == "/" || pathname == "/" ? "" : <Button onClick={() => SwitchToLogIn(props)} color="inherit">LOGIN</Button> //<Link to='/signin' className={classes.link}><Button color="inherit">Login</Button></Link>
            }
        </Toolbar>
      </AppBar>
    </div>
  );
}

const SwitchToLogIn = (props) =>{
  props.history.push('/')
}

const mapStateToProps = (state) =>{
  return({
    user: state.authReducer.user
  })
}

const mapDispatchToProps = (dispatch) =>{
  return({
    signOut:() => dispatch(signOut()),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));





// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             Foodpanda
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
