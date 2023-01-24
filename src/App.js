import './App.css'
import { Switch,Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home'
import Footer from './components/footer/Footer';
import Register from './pages/login/Register';
import Login from './pages/login/Login';
import Account from './pages/account/Account'
import { useSelector } from 'react-redux';

function App() {
  const isLoggIn = useSelector(state => state.auth.isLoggIn)
  const cartItems = useSelector(state => state.auth.itemsList)
  console.log(cartItems)
  return (
    <div className="App">
     {isLoggIn && (
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/account' component={Account} />
          </Switch>
          <Footer />
        </Router>
      )}
      {!isLoggIn && <Login />}
    </div>
  );
}

export default App;
