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
                    {/* <TrackingProductItem image="pprematrimoniales.png" TrackingTitle="Pláticas Prematrimoniales"  Trackingd="Identificación Vigente, CURP Formato Vigente, Acta de Nacimiento Formato Electrónico, Comprobante de domicilio no mayor a 3 meses."/>
                    <TrackingProductItem itemClass="tracking_pr_two" rowclass="flex-row-reverse" image="pprematrimoniales.png" TrackingTitle="Credencial INAPAM (60 años y más)"  Trackingd="Identificación Vigente, CURP Formato Vigente, Acta de Nacimiento Formato Electrónico, 2 Fotográfias tamaño infantíl de estudio." Trackingbtn="Learn more"/>
                    <TrackingProductItem itemClass="tracking_pr_three" image="pprematrimoniales.png" TrackingTitle="Despensas"  Trackingd="Los requisitos son:" Trackingbtn="Learn more"/> */}
                    <BannerNoticias />
                </div>
            </section>
        )
    }
}

export default TrackingProduct;