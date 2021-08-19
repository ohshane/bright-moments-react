import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { Fab, Modal, Backdrop, Fade, TextField, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // border: 'black solid 1px',
    width: '100%',
    height: 'calc(100vh - 160px)',
    '& > *': {
      float: 'right',
      top: 'calc(100vh - 160px - 56px)',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[0],
    padding: theme.spacing(3),
  },
  field: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  namefield: {
    '& > *': {
      margin: theme.spacing(1),
      width: '200px',
    }
  },
  urlfield: {
    '& > *': {
      margin: theme.spacing(1),
      width: '416px',
    }
  },
}));

const Panel = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    first: '',
    last: '',
    url: '',
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInputs({
      first: '',
      last: '',
      url: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const modal = (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <div className={classes.field}>
            <Typography variant="h5">
              Create Session
            </Typography>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={classes.namefield}>
              <TextField
                name="first"
                value={inputs.first}
                onChange={handleChange}
                label="First Name"
                variant="outlined"
              />
              <TextField
                name="last"
                value={inputs.last}
                onChange={handleChange}
                label="Last Name"
                variant="outlined"
              />
            </div>
            <div className={classes.urlfield}>
              <TextField
                name="url"
                value={inputs.url}
                onChange={handleChange}
                label="URL"
                variant="outlined"
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );

  return (
    <div className={classes.root}>
      {modal}
      <Fab onClick={handleOpen} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Panel;