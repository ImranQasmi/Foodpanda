import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Itemdisplay from './Itemdisplay';
import Searchbar from './Search';
import ChipsArray from './Chips';
import MyGoogleMap from './Googlemap';
import DisabledTabs from './Myrequest';
import Navbar from './Navbar';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    marginTop: 10
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    height: 150,
  },
  image: {
    // width: 128,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '100%',
  },
}));

 function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState({
    no: 0,
  });

  function handleChange(event, newValue) {
    setValue({no: newValue});
  }

  function handleChangeIndex(index) {
    setValue({no: index});
  }

  return (

    <span>

      <Navbar/>
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value.no}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="RESTURANT" />
          <Tab label="MY REQUEST" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value.no}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
            <Restaurant classes={classes} />
        </TabContainer>
        <TabContainer dir={theme.direction}>
            
          <DisabledTabs/>
            
        </TabContainer>
      </SwipeableViews>
    </div>
    </span>
  );
}

class Restaurant extends Component 
{
  constructor()
  {
    super();
    this.state={
      restaurants: []
    }
  }

  handleChangeRestaurants = (restaurants) =>{
    this.setState({restaurants})
  }
  

  render() {
    return (
      <div>
        <Searchbar handleChangeRestaurants={this.handleChangeRestaurants}/>
          <br></br>
          <br></br>

          <MyGoogleMap classes={this.props.classes}/>
          <br></br>

          <ChipsArray/>

          <br></br>
           {
             this.state.restaurants.map((data, index) =>{
               return <Itemdisplay key={index} index={index} data={data}/>
             })
           }           
      </div>
    )
  }
}


export default FullWidthTabs;