import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import AddEvents from './components/AddEvents/AddEvents';
import AddProducts from './components/AddProducts/AddProducts';
import MyOrders from './components/MyOrders/MyOrders';
import Management from './components/Management/Management';
import Admin from './components/Admin/Admin';
import AdminHome from './components/Admin/AdminHome';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/management">
            <Management />
          </PrivateRoute>
          <PrivateRoute path="/addProducts">
            <AddProducts />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin /> <AdminHome />
          </PrivateRoute>
          <PrivateRoute path="/book/:id">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <MyOrders />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
