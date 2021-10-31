import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
//auht provider
import AuthProvider from "./Context/AuthProvider";
//private route
import PrivateRoute from "./Context/PrivateRoute/PrivateRoute";
import About from "./Pages/About/About";
import AddServices from "./Pages/AddServices/AddServices";
import Contact from "./Pages/Contact/Contact";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Booking from "./Pages/MyBooking/Booking";
import MyOrder from "./Pages/MyOrder/MyOrder";

import NotFound from "./Pages/NotFound/NotFound";
import Details from "./Pages/Services/DynamicDetails/Details";
import Services from "./Pages/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/services/:id">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/book">
              <Booking></Booking>
            </Route>
            <Route path="/order">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/addServices">
              <AddServices></AddServices>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
