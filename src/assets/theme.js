import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(0,128,128, 1)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#A06F47',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(77,78,83, 1)',
      secondary: 'rgba(77,78,83, .65)',
    },
    background: {
      default: 'rgba(242, 230, 216, .5)',
    },
  },
  //   typography: {
  //   fontFamily: '',
  //    body2: {fontFamily: '', fontSize: ''}
  //   },
  shape: {
    borderRadius: 5,
  },
  //   spacing: 8, by default 8
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#fff',
      },
    },
    //     MuiButton: {
    //       root: {
    //         textTransformation: 'none',
    //       },
    //     },
  },
});
