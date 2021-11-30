import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AurhProvider from "./Context/AurhProvider";
import Login from "./pages/Auth/Login/Login";
import Home from "./pages/Home/Home";
import AllServicess from "./pages/Main/AllServicess/AllServicess";
import Apointed from "./pages/Main/Apointed/Apointed";
import Contact from "./pages/Main/Contact/Contact";
import Doctors from "./pages/Main/Doctors/Doctors";
import Notfound from "./pages/Main/Notfound/Notfound";
import View from "./pages/Main/View/View";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <AurhProvider>
      <div className="">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route exact path="/servicess">
              <Header></Header>
              <AllServicess></AllServicess>
              <Footer></Footer>
            </Route>
            <Route exact path="/login">
              <Header></Header>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route exact path="/contact">
              <Header></Header>
              <Contact></Contact>
              <Footer></Footer>
            </Route>
            <PrivateRoute exact path="/apointed">
              <Header></Header>
              <Apointed></Apointed>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/view/:serviceId">
              <View></View>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute exact path="/our_doctors">
              <Header></Header>
              <Doctors></Doctors>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </AurhProvider>
  );
}

export default App;
