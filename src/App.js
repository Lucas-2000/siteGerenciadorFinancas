import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import Criar from './paginas/criar/Criar';
import Gastos from './paginas/home/Gastos';

const tema = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <Router>
      <ThemeProvider>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path='/'>
              <Gastos />
          </Route>  
          <Route exact path='/criar'>
            <Criar />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
