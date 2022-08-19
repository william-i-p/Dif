import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Link, Switch, BrowserRouter } from "react-router-dom";
/*------ Pages-----*/
/*import { Home } from "./Pages/Home";*/
/*import DigitalMarketing from "./Pages/Digital-marketing";*/
import PaymentProcessing from "./Pages/Payment-processing";
import HRManagement from "./Pages/HR-Management";
import Startup from "./Pages/Startup";
import HomeCRM from "./Pages/Home-CRM";
import Servicios from "./Pages/Servicios";
import Transparencia from "./Pages/Transparencia";
import Process from "./Pages/Process";
import Team from "./Pages/Team";
import Portfolio2col from "./Pages/Portfolio-2col";
import Portfolio3col from "./Pages/Portfolio-3col";
import Portfoliofull4col from "./Pages/Portfolio-fullwidth-4col";
import PortfolioSingle from "./Pages/PortfolioSingle";
import Bloglist from "./Pages/Bloglist";
import BlogSingle from "./Pages/BlogSingle";
import Contact from "./Pages/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";
import Landing from "./Pages/Landing";
import homesupport from "./Pages/home-support";
import homeERP from "./Pages/Home-ERP";
import homeHosting from "./Pages/HomeHosting";
import homeSecurity from "./Pages/HomeSecurity";
import homeSoftwareDark from "./Pages/Home-software-dark";
import HomeAppShowcase from "./Pages/Home-app-showcase";
import HomeCloud from "./Pages/Home-cloud";
import Index from "./Pages/Index";
import VisionMision from "./Pages/VisionMision";
import HomeEvent from "./Pages/Home-event";
import HomeChat from "./Pages/Home-chat";
import Price from "./Pages/Price";
import Faq from "./Pages/Faq";
import ServiceDetails from "./Pages/ServiceDetails";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import BlogGridPage from "./Pages/BlogGridPage";
import NotFound from "./Pages/404";
import Caic from "./Pages/Caic";
import Odontologia from "./Pages/Odontologia";
import Dermatologia from "./Pages/Dermatologia";
import Homeopatia from "./Pages/Homeopatia";
import Juridico from "./Pages/Juridico";
import Psicologo from "./Pages/Psicologo";
import Ubr from "./Pages/Ubr";
import Programas from "./Pages/Programas";
import Comedores from "./Pages/Comedores";
import Primeros from "./Pages/Primeros";
import Paap from "./Pages/Paap";
import Talleres from "./Pages/Talleres";

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/"} component={Index} />
          <Route path="/VisionMision" component={VisionMision} />
          
          <Route path="/Caic" component={Caic} />
          <Route path="/Odontologia" component={Odontologia} />
          <Route path="/Dermatologia" component={Dermatologia} />
          <Route path="/Homeopatia" component={Homeopatia} />
          <Route path="/Juridico" component={Juridico} />
          <Route path="/Psicologo" component={Psicologo} />
          <Route path="/Ubr" component={Ubr} />
          <Route path="/Programas" component={Programas} />
          <Route path="/Comedores" component={Comedores} />
          <Route path="/Primeros" component={Primeros} />
          <Route path="/Paap" component={Paap} />
          <Route path="/Talleres" component={Talleres} />
          <Route path="/Servicios" component={Servicios} />
          <Route path="/Transparencia" component={Transparencia} />
          <Route
           path="/"
            component={Index}
          />
          {/*aqui va */}
          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
