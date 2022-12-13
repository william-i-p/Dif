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

class App extends Component {
   componentDidMount() {
      this.props.hideLoader();
   }
   render() {
      return (
         <BrowserRouter>
            <Switch>
               <Route exact={true} path={'/'} component={Index} />
               <Route path='/VisionMision' component={VisionMision} />

               <Route path='/Caic' component={Caic} />
               <Route path='/Odontologia' component={Odontologia} />
               <Route path='/Dermatologia' component={Dermatologia} />
               <Route path='/Homeopatia' component={Homeopatia} />
               <Route path='/Juridico' component={Juridico} />
               <Route path='/Psicologo' component={Psicologo} />
               <Route path='/Ubr' component={Ubr} />
               <Route path='/Programas' component={Programas} />
               <Route path='/Comedores' component={Comedores} />
               <Route path='/Primeros' component={Primeros} />
               <Route path='/Paap' component={Paap} />
               <Route path='/Talleres' component={Talleres} />
               <Route path='/Servicios' component={Servicios} />
               <Route path='/Transparencia' component={Transparencia} />
               <Route path='/AvisoPrivacidad' component={AvisoPrivacidad} />

               <Route path='/' component={Index} />
               {/*aqui va */}
            </Switch>
         </BrowserRouter>
      );
   }
}

export default App;
