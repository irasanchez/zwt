import React from 'react';

import Layout from '../components/Layout';
import Search from '../components/Search';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { theme } from '../assets/theme';
import SEO from '../components/SEO';



const useStyles = makeStyles({
  main: {
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://source.unsplash.com/1600x900/?zerowaste-plants)',
    overflow: 'hidden',
  },
  container: {
    width: '80%',
    margin: '0 auto',
    overflow: 'hidden',
    
  },
  text: {
    color: theme.palette.white.main,
  },
  overlay: {
    overflow: 'hidden',
    paddingTop: '100px',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(160, 111, 71, .65)',
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <SEO />
      <main className={classes.main}>
        <div className={classes.overlay}>
          <Layout>
            <Container className={classes.container}>
              <Typography className={classes.text} variant="h1" component="h1">
                Zero Waste Alternative
              </Typography>
              <Typography className={classes.text} variant="h4" component="h2">
                Find zero waste alternatives to anything you need.
              </Typography>
              <Search />
            </Container>
          </Layout>
        </div>
      </main>
    </>
  );
}
