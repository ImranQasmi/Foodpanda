import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { searchRestaurantByText } from '../redux/actions/Searching';


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

 function Search(props) {

  const classes = useStyles();

  
  const [values, setValues] = React.useState({
    text: ""
  });
  
  const handleChange = name => event => {
    setValues({ [name]: event.target.value });
  };
  
  const handleSubmit = () =>{
    props.searchRestaurantByText(values.text.toLowerCase());
    setTimeout(()=>{
      props.handleChangeRestaurants(props.restaurants)
    }, 3000)
  }

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-search"
        label="Search here"
        fullWidth
        type="search"
        className={classes.textField}
        onChange={handleChange("text")}
        margin="normal"
        variant="outlined"
      />
       <Button variant="contained" color="inherit" size="large" onClick={handleSubmit} fullWidth className={classes.button}>
          Search
       </Button>
    </form>
  );
}

const mapStateToProps = (state) =>{
  return({
    restaurants: state.searchReducer.restaurants,
  })
}

const mapDispatchToProps = (dispatch) =>{
  return({
    searchRestaurantByText: (text) => dispatch(searchRestaurantByText(text))
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);