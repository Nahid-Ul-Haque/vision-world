import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashbaord from './Components/Pages/Admin/Dashboard/Dashboard';
import AuthProvider from './Components/Pages/Contexts/AuthProvider';
import Explore from './Components/Pages/Explore/Explore';
import Home from './Components/Pages/Home/home/Home';
import ProductDetails from './Components/Pages/Home/home/Products/ProductDetails/ProductDetails';
import Login from './Components/Pages/Login/login/Login';
import PrivateRoute from './Components/Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Components/Pages/Login/Register/Register';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/explore'>
            <Explore></Explore>
          </Route>
          <PrivateRoute path='/details/:detailsId'>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
          <Route path='/dashboard'>
            <Dashbaord></Dashbaord>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter >
    </AuthProvider>

  );
}

export default App;
