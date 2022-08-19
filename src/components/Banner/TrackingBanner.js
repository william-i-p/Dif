import React from 'react';
import TrackingLogo from '../TrackingLogo';

const TrackingBanner =()=>{
    return(
        <section className="tracking_banner_area text-center">
            <div className="container">
                <div className="tracking_banner_content">
                    <h3>DIF JOCOTEPEC</h3>
                    <p>Gobierno Municipal</p>
                    {/* <img src={require ("../../img/home-tracking/logobannerhome.png")} alt=""/> */}
                </div>
               {/* <TrackingLogo/> */}
            </div>
        </section>
    )
}

export default TrackingBanner;