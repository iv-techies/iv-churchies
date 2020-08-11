import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import SundaySchool from "./pages/SundaySchool/SundaySchool";
import WatchPage from "./pages/WatchPage";
import ResourcePage from "./pages/ResourcePage";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";


function App ()
{

  return (
    <Router>


      <NavBar />
      <Switch>

        <Route path="/about" component={ About } />
        <Route path="/quiz" component={ SundaySchool } />
        <Route path="/watch/:type" component={ WatchPage } />
        <Route path="/watch" component={ WatchPage } />
        <Route path="/resources/:type" component={ ResourcePage } />
        <Route path="/resources" component={ ResourcePage } />
        <Route path="/contact" component={ Contact } />
        <Route path="/" component={ Home } />

      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
