import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import download from '../Image/download.jpg'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { itemsOrder } from '../redux/actions/customerAction';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1300,
  },
  image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function ItemDisplay(props) {
  const classes = useStyles();
  const { data, user, restaurants } = props;

  function itemsOrderHandler(index){
    props.itemsOrder({...restaurants[index], userId: user.uid})
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={data.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                 <b>{data.resturantname}</b>
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {data.productname}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                   {data.catagory}
                </Typography>
              </Grid>
            </Grid>

			<Grid>
			<Grid item>
              <Typography variant="subtitle1">$ {data.price}/-</Typography>
            </Grid>
            <Grid item>
			      <Button variant="outlined" className={classes.button} onClick={() => itemsOrderHandler(props.index)} style={{marginTop: 100}}>
              Order Now
            </Button>			
            </Grid>
			</Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return({
    user: state.authReducer.user,
    restaurants: state.searchReducer.restaurants
  })
}

const mapDispatchToProps = (dispatch) =>{
  return({
    itemsOrder: (data) => dispatch(itemsOrder(data))
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemDisplay);