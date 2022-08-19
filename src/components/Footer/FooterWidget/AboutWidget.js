import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
import { Link } from "react-router-dom";

class AboutWidget extends Component {
    render(){
        let FooterData = this.props.FooterData;
        var {ftitle} = this.props;
        return(
            <Reveal effect="fadeInUp" duration={1200}>
                <div className="col-lg-3 col-md-6">
                    <div className="f_widget about-widget pl_70 wow fadeInLeft text-center" data-wow-delay="0.4s">
                        <h3 className="f-title f_600 t_color f_size_18 mb_40">{ftitle}</h3>
                        <ul className="list-unstyled f_list">
                            {
                                FooterData.about.map(item =>{
                                    return(
                                        <li key={item.id}><Link to={item.url}>{item.text}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Reveal>
        )
    }
}

export default AboutWidget;