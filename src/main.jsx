import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles'
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2dd4bf',
      dark: '#2dd4bf',
      contrastText: '#2f3640',
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>,
)