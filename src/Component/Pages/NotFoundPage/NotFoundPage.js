// NotFoundPage.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        404 Not Found
      </Typography>
      <Typography variant="h4" align="center" paragraph>
        Sorry, the page you are looking for might be in another castle.
      </Typography>
    </Container>
  );
};

export default NotFoundPage;