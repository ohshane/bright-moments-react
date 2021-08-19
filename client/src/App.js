import React, { Fragment } from 'react';
import { Container, createTheme, CssBaseline } from '@material-ui/core';
import { purple, green, yellow } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import Main from 'components/pages/Main';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[400],
    },
    secondary: {
      main: green[400],
    },
  },
});

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Main />
        </Container>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;