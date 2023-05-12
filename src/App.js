import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Servicios from './Pages/Servicios';
import Transparencia from './Pages/Transparencia';

import Index from './Pages/Index';
import VisionMision from './Pages/VisionMision';
import Caic from './Pages/Caic';
import Odontologia from './Pages/Odontologia';
import Dermatologia from './Pages/Dermatologia';
import Homeopatia from './Pages/Homeopatia';
import Juridico from './Pages/Juridico';
import Psicologo from './Pages/Psicologo';
import Ubr from './Pages/Ubr';
import Programas from './Pages/Programas';
import Comedores from './Pages/Comedores';
import Primeros from './Pages/Primeros';
import Paap from './Pages/Paap';
import Talleres from './Pages/Talleres';
import AvisoPrivacidad from './Pages/AvisoPrivacidad';
import ScrollToTopRoute from './ScrollToTopRoute';

class App extends Component {
   componentDidMount() {
      this.props.hideLoader();
   }
   render() {
      return (
         <BrowserRouter>
            <Switch>
               <ScrollToTopRoute exact={true} path={'/'} component={Index} />
               <ScrollToTopRoute path='/VisionMision' component={VisionMision} />

               <ScrollToTopRoute path='/Caic' component={Caic} />
               <ScrollToTopRoute path='/Odontologia' component={Odontologia} />
               <ScrollToTopRoute path='/Dermatologia' component={Dermatologia} />
               <ScrollToTopRoute path='/Juridico' component={Juridico} />
               <ScrollToTopRoute path='/Psicologo' component={Psicologo} />
               <ScrollToTopRoute path='/Ubr' component={Ubr} />
               <ScrollToTopRoute path='/Programas' component={Programas} />
               <ScrollToTopRoute path='/Comedores' component={Comedores} />
               <ScrollToTopRoute path='/Primeros' component={Primeros} />
               <ScrollToTopRoute path='/Paap' component={Paap} />
               <ScrollToTopRoute path='/Talleres' component={Talleres} />
               <ScrollToTopRoute path='/Servicios' component={Servicios} />
               <ScrollToTopRoute path='/Transparencia' component={Transparencia} />
               <ScrollToTopRoute path='/AvisoPrivacidad' component={AvisoPrivacidad} />

               <ScrollToTopRoute path='/' component={Index} />
            </Switch>
         </BrowserRouter>
      );
   }
}

export default App;
