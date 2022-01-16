import { Theme as MuiTheme } from '@mui/material/styles';

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      info: string;
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      info?: string;
      danger?: string;
    };
  }
}

// enable types in `css` helper function in `@mui/material/styles`
declare module "styled-components" {
  interface DefaultTheme extends MuiTheme {}
}
