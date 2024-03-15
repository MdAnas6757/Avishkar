import React from 'react'
const { Grid, TextField, InputAdornment, IconButton } = require('@mui/material');
const { VisibilityOff: VisibilityOffIcon, Visibility: VisibilityIcon } = require('@mui/icons-material');

const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === 'password' && {
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleShowPassword} edge="end">
                  {type === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
    </Grid>
  );
};

export default Input
