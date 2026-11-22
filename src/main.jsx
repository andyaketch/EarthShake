import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles'
import './index.css'
import App from './App.jsx'

// mui theme, only turquoise + dark grey. dark is same as main so hover dont add a new colour
const theme = createTheme({
  palette: {
    primary: {
      main: '#2dd4bf',
      dark: '#2dd4bf',
      contrastText: '#2f3640',
    },
  },
})

// the providers must WRAP app, before it was closed empty so app was outside (my bad)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>,
)