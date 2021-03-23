import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { navigate } from 'gatsby';
const { products } = require('../assets/data');

export default function Search() {
  const [query, setQuery] = useState('');
  const [select, setSelect] = useState(0);
  const handleInputChange = (e) => {
    if (typeof e.target.value === 'number') {
      setQuery(products[e.target.value].name);
    } else {
      setQuery(e.target.value);
    }
  };
  const handleChange = (e) => {
    e.persist();
    handleInputChange(e);
    setSelect(select + 1);
  };

  const handleSubmit = () => {
    if (query !== '') {
      navigate(`/${query}`);
    }
  };

  useEffect(handleSubmit, [select]);

  return (
    <div style={{ width: 300, margin: '0 auto' }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        inputValue={query}
        onInputChange={handleInputChange}
        onChange={handleChange}
        options={products.map((product) => product.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
            type="submit"
          />
        )}
      />
    </div>
  );
}
