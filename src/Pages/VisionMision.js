import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import Breadcrumb from '../components/Breadcrumb';
import FeaturesitemsVision from '../components/Features/FeaturesitemsVision';
import FeaturesitemsMision from '../components/Features/FeaturesitemsMision';
import Partner from '../components/Partner';
import GoogleMaps from '../components/Features/GoogleMaps';


const VisionMision = () =>{
    return(
        <div className="body_wrapper">
             <CustomNavbar mClass="menu_tracking" nClass="mr-auto" hbtnClass="tracking_btn"/>
             {/*<CustomNavbar mClass="menu_tracking" nClass="mr-auto" hbtnClass="tracking_btn"/> */}
             <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="VISIÓN Y MISIÓN" Pdescription="Gobierno Municipal de Jocotepec 2021-2024"/>
            {/*  <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info text-justify">
                        <FeaturesitemsVision rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="VISIÓN" descriptions="Sistema DIF Jocotepec, es un organismo público descentralizado encargado de la asitencia social pública que ofrece servicios a personas en situación de vulnerabilidad. Nuestra Visión es ofrecer estrategias de atención con enfoques individuales, familiares y/o grupales por medio de un equipo de trabajo totalmente capacitado, motivado y comprometido, en ofrecer servicio de calidad a todas las delegaciones y Agencias que integran nuestro municipio."/>
                    </div>
                </div>
                <div className="container">
                    <div className="features_info text-justify">
                        <FeaturesitemsMision rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="MISIÓN" descriptions="Ser una institución humanista, fuerte y a la vez sensible y capaz de responder ante las necesidades más vulnerables de cada comunidad, pero con el compromiso de que los porgramas asistenciales que el Sistema DIF ofrece, lleguen a ser desarrollables más allá de solo ser asitenciales, en donde la sociedad se involucre y le quede ser aplicable en su vida cotidiana,, con ello garantizar su seguridad familiar, alimentaria, comunitaria y social."/>
                    </div>
                </div>
            </section> */}
            <div className='container process_area  sec_pad pl-30 pr-30 mt_90 mb_90'>
                <div className='features_info text-center responsivomovil'>
                    <div>
                        <h3>VISIÓN</h3>
                    </div>
                    <div>
                        <p>Sistema DIF Jocotepec, es un organismo público descentralizado encargado de la asitencia social pública que ofrece servicios a personas en situación de vulnerabilidad. Nuestra Visión es ofrecer estrategias de atención con enfoques individuales, familiares y/o grupales por medio de un equipo de trabajo totalmente capacitado, motivado y comprometido, en ofrecer servicio de calidad a todas las delegaciones y Agencias que integran nuestro municipio.</p>
                    </div>
                </div>
            </div>
            <div className='container process_area  sec_pad pl-30 pr-30 mt_90 mb_90'>
                <div className='features_info text-center responsivomovil'>
                    <div>
                        <h3>MISIÓN</h3>
                    </div>
                    <div>
                        <p>Ser una institución humanista, fuerte y a la vez sensible y capaz de responder ante las necesidades más vulnerables de cada comunidad, pero con el compromiso de que los porgramas asistenciales que el Sistema DIF ofrece, lleguen a ser desarrollables más allá de solo ser asitenciales, en donde la sociedad se involucre y le quede ser aplicable en su vida cotidiana,, con ello garantizar su seguridad familiar, alimentaria, comunitaria y social.</p>
                    </div>
                </div>
            </div>
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

};

export default VisionMision;
