import React, {Component} from 'react';
import BannerNoticias from '../BannerNoticias';
import TrackingProductItem from './TrackingProductItem';


class TrackingProduct extends Component{
    render(){
        return(
            
            <section className="tracking_product_area sec_pad">
                <div className="container text-center">
                    <h3>NUESTRAS NOTICIAS</h3><br></br>
                </div>
                <div className="container">
                    <BannerNoticias />
                </div>
            </section>
        )
    }
}

export default TrackingProduct;