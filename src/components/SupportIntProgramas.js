import React, {Component} from 'react';
import { Link, NavLink } from "react-router-dom";

class SupportIntProgramas extends Component {
    constructor(){
        super();
        this.state = {
            integrationItem:[
                {
                    "id": 110,
                    "iImage": "comedores.png",
                    "text": "Comedores Asistenciales",
                    "link": "/Comedores"
                },
                {
                    "id": 111,
                    "iImage": "1000dias.png",
                    "text": "Primero 1000 Días de Vida",
                    "link": "/Primeros"
                },
                {
                    "id": 112,
                    "iImage": "paap.png",
                    "text": "PAAP",
                    "link": "/Paap"
                },
                {
                    "id": 113,
                    "iImage": "tae.png",
                    "text": "Talleres",
                    "link": "/Talleres"
                }
            ]
        };
    }

    render(){
        return(
            <section className="support_integration_area">
                <div className="container">
                   {/* <Sectitle sClass="sec_title text-center mb_70" Title='Software Integrations' TitleP='Why I say old chap that is spiffing lavatory chip shop gosh off his nut, smashing boot are you taking the piss posh loo brilliant matie boy.!'/> */}
                    <div className="row flex-row-reverse">
                        <div className="col-12">
                            <div className="row">
                                {this.state.integrationItem.map(post =>(
                                    <div className="col-lg-6 col-md-6 col-sm-6" key={post.id}>
                                        {/*<a href="/Service" className="s_integration_item"> */}
                                        <Link to={post.link} className="s_integration_item">
                                            <img src={require ("../img/new-home/" + post.iImage)} alt=""/>
                                            <h5>{post.text}</h5>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }
}
export default SupportIntProgramas;