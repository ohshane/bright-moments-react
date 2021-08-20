import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import {
  Fab,
  Modal,
  Backdrop,
  Fade,
  TextField,
  Typography,
  Button,
  Snackbar
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
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
      margin: theme.spacing(1),
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
  submitfield: {
    '& > *': {
      margin: theme.spacing(1),
      float: 'right',
    }
  },
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props}/>
};

const Panel = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    first: '',
    last: '',
    url: '',
  });
  const [snackBarOpen, setSnackBarOpen] = useState(false);

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
    if (first && last && url) {
      setSnackBarOpen(true);
    }
    await axios.post('http://localhost:4000/posts', {inputs});
    handleClose();
  };

  const handleSnackbarClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBarOpen(false);
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
            <div className={classes.submitfield}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Add
              </Button>
            </div>
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
      <Snackbar open={snackBarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert severity="success" onClose={handleSnackbarClose}>
          Valid information
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Panel;