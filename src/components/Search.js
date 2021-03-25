import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { navigate } from 'gatsby';
import { Container } from '@material-ui/core';
import Autocomplete from 'accessible-autocomplete/react';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../assets/theme';
import { TrendingUpRounded } from '@material-ui/icons';
const { products } = require('../assets/data');

const useStyles = makeStyles({
  containerStyle: {
    maxWidth: '60vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '80px',
    '& .autocomplete__wrapper': {
      display: 'block',
      width: '100%',
    },
    '& .autocomplete__wrapper input': {
      height: '50px',
      borderRadius: '.25rem',
      display: 'block',
      width: '100%',
      fontSize: '1.5rem',
    },
    '& .autocomplete__input:focus': {
      outline: 'none',
    },
    '& .autocomplete__menu--visible': {
      borderRadius: '.25rem',
      padding: '10px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      backgroundColor: theme.palette.white.main,
      maxHeight: '300px',
      overflowY: 'scroll',
    },
    '& .autocomplete__menu--hidden': {
      display: 'none',
    },
    '& .autocomplete__option': {
      padding: '10px 5%',
      margin: '0',
      fontSize: '1.5rem',
      listStyleType: 'none',
      minWidth: '100%',
    },
    '& .autocomplete__option:focus': {
      listStyleType: 'none',
      color: theme.palette.white.main,
      backgroundColor: '#008080',
      outline: 'none',
    },
    '& .anchor': {
      position: 'absolute',
      height: '50px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& .typewriter-effect': {
      position: 'relative',
      top: '-40px',
      left: '11px',
    },
    '& .Typewriter': {
      fontSize: '1.5rem',
    },
  },
});

export default function Search() {
  const [typewriterVisible, setVisibility] = useState(true);
  const { containerStyle } = useStyles();
  const productNames = products.map((prod) => prod.name.toLowerCase());

  const handleVisibility = () => {
    setVisibility(false);
    //set focus so user doesn't have to double click
    document.getElementById('autocomplete').focus();
  };
  const handleOnSearch = (value, populateResults) => {
    if (!value) return productNames;
    const filteredResults = productNames.filter((product) =>
      product.includes(value.toLowerCase())
    );
    populateResults(filteredResults);
  };

  const handleSubmit = (selection) => {
    if (selection) {
      const product = products.find((prod) =>
        prod.name.toLowerCase().includes(selection.toLowerCase())
      );
      navigate(`/${product.slug}`);
    }
  };

  return (
    <Container classes={{ root: containerStyle }}>
      <div className="anchor" onClick={handleVisibility}>
        <Autocomplete
          confirmOnBlur={false}
          autoFocus
          id="autocomplete"
          source={handleOnSearch}
          onConfirm={handleSubmit}
        />
        {typewriterVisible && (
          <div className="typewriter-effect" onClick={handleVisibility}>
            <Typewriter
              options={{
                strings: productNames,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        )}
      </div>
    </Container>
  );
}
