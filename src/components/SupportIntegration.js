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
                    "iImage": "caic2.png",
                    "text": "CAIC",
                    "link": "/Caic"
                },
                {
                    "id": 101,
                    "iImage": "dentista.png",
                    "text": "Odontologia",
                    "link": "/Odontologia"
                },
                {
                    "id": 102,
                    "iImage": "dermatologia.png",
                    "text": "Dermatologia",
                    "link": "/Dermatologia"
                },
                {
                    "id": 103,
                    "iImage": "homeopata.png",
                    "text": "Homeopatia",
                    "link": "/Homeopatia"
                },
                {
                    "id": 104,
                    "iImage": "juridico.png",
                    "text": "Juridico",
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
                    "text": "UBR",
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
export default SupportIntegration;
