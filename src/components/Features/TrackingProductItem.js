import React, {Component} from 'react';

class TrackingProductItem extends Component {
    render(){
        let {itemClass, rowclass, image, TrackingTitle, Trackingd, Trackingbtn, TrackingInf}= this.props;
        return(
            <div className={`tracking_pr_item ${itemClass}`}>
                <div className={`row align-items-center ${rowclass}`}>
                    <div className="col-12  tracking_bg">
                        <img className='tracking_img' src={require("../../img/home-tracking/" + image)} alt=""/>
                    </div>
                    {/* <div className="col-lg-6 col-xs-12">
                        <div className="tracking_content wow fadeInDown">
                            <h3 className='text-center'>{TrackingTitle}</h3>
                            <p>{Trackingd}</p>
                            <p>{TrackingInf}</p>
                            <ul className='tracking_list_services'>
                                <li>Domicilio: Hidalgo #6 Colonia Centro Jocotepec, Jalisco.</li>
                                <li>Teléfono: 387 763 2799</li>
                            </ul>
                            
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default TrackingProductItem;