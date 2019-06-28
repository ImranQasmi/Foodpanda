import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { getAllOrders } from '../redux/actions/customerAction';
import ItemDisplay from './statusItems';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function MyRequest(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <MyRequestConent classes={classes} value={value} handleChange={handleChange} {...props}/>
  );
}

class MyRequestConent extends Component
{
  constructor()
  {
    super();
    this.state={
      allOrders: []
    }
  }

  componentDidMount()
  {
    if(this.props.user)
    {
      this.props.getAllOrders(this.props.user.uid)
    }

  }

  componentWillReceiveProps(nextProps)
  {
    this.setState({allOrders: nextProps.allOrders})
  }

  render(){

    const { classes, handleChange, value } = this.props;
    const { allOrders } = this.state;

    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Pending" />
            <Tab label="Inprogress" />
            <Tab label="Delivered" />
          </Tabs>
        </AppBar>
        {
          value === 0 && 
          <TabContainer>
            {
              allOrders.filter((data) => data.status === "pending").map((data, index) =>{
              
                return <ItemDisplay key={index} data={data} />
              })
            }
          </TabContainer>
        }
        {
          value === 1 && 
          <TabContainer>
          {
            allOrders.filter((value) => value.status === "inprogress").map((data, index) =>{
              return <ItemDisplay key={index} data={data} />
            })
          }
          </TabContainer>
        }
        {
          value === 2 && 
          <TabContainer>
          {
            allOrders.filter((value) => value.status === "delivered").map((data, index) =>{
              return <ItemDisplay key={index} data={data} />
            })
          }
          </TabContainer>
        }
      </div>
    )
  }
}


const mapStateToProps = (state) =>{
  return({
    user: state.authReducer.user,
    allOrders: state.customerReducer.allOrders
  })
}

const mapDispatchToProps = (dispatch) =>{
  return({
    getAllOrders: (id) => dispatch(getAllOrders(id))
  })
}



export default connect(mapStateToProps, mapDispatchToProps)(MyRequest);
