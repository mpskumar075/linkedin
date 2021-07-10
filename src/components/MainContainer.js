import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MainGrid from './MainGrid';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={
         { "padding-top": "20px"}
      }>
        <MainGrid />
      </Container>
    </React.Fragment>
  );
}
