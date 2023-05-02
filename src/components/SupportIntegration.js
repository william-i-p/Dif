import React, {Component} from 'react';
import Sectitle from './Title/Sectitle';
import { Link } from "react-router-dom";

class SupportIntegration extends Component {
    constructor(){
        super();
        this.state = {
            integrationItem:[
                {
                    "id": 100,
                    "iImage": "caic.png",
                    "text": "Centro de Asistencia Infantil Comunitario (CAIC)",
                    "link": "/Caic"
                },
                {
                    "id": 101,
                    "iImage": "dentista.png",
                    "text": "Odontología",
                    "link": "/Odontologia"
                },
                {
                    "id": 102,
                    "iImage": "dermatologia.png",
                    "text": "Dermatología",
                    "link": "/Dermatologia"
                },
                {
                    "id": 103,
                    "iImage": "homeopata.png",
                    "text": "Homeopatía",
                    "link": "/Homeopatia"
                },
                {
                    "id": 104,
                    "iImage": "juridico.png",
                    "text": "Jurídico",
                    "link": "/Juridico"
                },
                {
                    "id": 105,
                    "iImage": "psicologo.png",
                    "text": "Psicología",
                    "link": "/Psicologo"
                },
                {
                    "id": 106,
                    "iImage": "ubr.png",
                    "text": "Unidad Básica de Rehabilitación (UBR)",
                    "link": "/Ubr"
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
                                        <Link to={post.link} className="s_integration_item bg-brand">
                                            <img src={require ("../img/new-home/" + post.iImage)} alt=""/>
                                            <h5 className="text-white">{post.text}</h5>
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
export default SupportIntegration;
