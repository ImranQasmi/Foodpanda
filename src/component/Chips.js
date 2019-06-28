import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(3.5),
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Pizza' },
    { key: 1, label: 'Chicken' },
    { key: 2, label: 'Burgur' },
    { key: 3, label: 'Chicken-Role' },
    { key: 4, label: 'Zinger' },
  ]);

  return (
    <Paper className={classes.root}>
      {chipData.map(data => {
        let icon;

        return (
          <Chip onClick={()=>{
              alert("Hi ! its a chips");
          }}
            key={data.key}
            icon={icon}
            label={data.label}
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
}
