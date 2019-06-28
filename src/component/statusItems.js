import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

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
  const { data, user } = props;
    console.log("progresssss",props.userData.userType)
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
                {
                    props.userData.userType == "restaurant" ? 
                    data.status == "pending" ? <Button onClick={() => props.handleChangeOrderStatus({status: "inprogress", id: data.id})}>Approve</Button> : 
                    data.status == "inprogress"? <Button onClick={() => props.handleChangeOrderStatus({ status: "delivered", id: data.id})}>Deliver</Button> : 
                    data.status : data.status == "delivered" ? <Button>Rate Us</Button> : 
                    data.status
                }
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
    userData: state.authReducer.userData,
    restaurants: state.searchReducer.restaurants,
    allOrders: state.customerReducer.allOrders
  })
}

const mapDispatchToProps = (dispatch) =>{
  return({
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemDisplay);