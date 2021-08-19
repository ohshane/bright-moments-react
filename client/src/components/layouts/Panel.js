import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import { blockStatement } from '@babel/types';

const useStyles = makeStyles((theme) => ({
  root: {
    // border: 'black solid 1px',
    width: '100%',
    height: 'calc(100vh - 160px)',
    '& > *': {
      float: 'right',
      top: 'calc(100vh - 160px - 56px)',
    },
  }
}));

const Panel = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Panel;