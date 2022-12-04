import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
import { Product } from '../models/product';
import Header from './Header';

const products=[
  {name:'product1', price: 100.00 },
  {name:'product2', price: 100.00 },
  {name:'product3', price: 100.00 },
]
function App() {  
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#eaeaea",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Container>
      <ul>
        {products.map((item,index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
    <Catalog />
    </Container>
    
    </ThemeProvider>
  );
    }
export default App;
