import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import Partner from '../components/Partner';
import GoogleMaps from '../components/Features/GoogleMaps';
import SupportIntProgramas from '../components/SupportIntProgramas';

const Programas = () =>{

    return (
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_tracking" nClass="mr-auto" hbtnClass="tracking_btn"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="PROGRAMAS" Pdescription="DIF Jocotepec dispone de los siguientes programas:"/>
            <SupportIntProgramas />
            <div className='row'>
            <div className='container text-center pt_160 sec_pad_b'>
                <h3>Mapa del centro de atención:</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1871.1728314798916!2d-103.42925411196433!3d20.285954664046262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50412c7454715305!2sDif%20Municipio%20de%20Jocotepec!5e0!3m2!1ses!2smx!4v1654661346434!5m2!1ses!2smx" width="600" height="450"></iframe>
            </div>
            </div>
            <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/>{/**esta es la parte de los logos de la dependencia */}
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>

        </div>
    );

}
export default Programas;