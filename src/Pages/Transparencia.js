import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import HRService from '../components/Service/HRService';
import Partner from '../components/Partner';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import Featuresitems from '../components/Features/Featuresitems';
import FeaturesitemsDescrip from '../components/Features/FeaturesitemsDescrip';
import FeaturesitemsContact from '../components/Features/FeaturesitemsContact';
import SupportIntegrationTranspa from '../components/SupportIntegrationTranspa';
import GoogleMaps from '../components/Features/GoogleMaps';

const Transparencia = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_tracking" nClass="mr-auto" hbtnClass="tracking_btn"/>{/* ESTA ES LA PARTE DEL MENU DEL HOME */}
            {/*<CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/> */}
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Transparencia" Pdescription=""/>{/**esta es la parte del banner */}

           {/*  <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info text-justify">
                        <Featuresitems rowClass="row" aClass="pl_40" fimage="process_2.png" iImg="icon02.png" ftitle="Ley de transparencia y Acceso a la información Pública" descriptions="La información materia de este ordenamiento es un bien del dominio público, cuya titularidad reside en la sociedad, misma que tendrá en todo momento la facultad de disponer de ella para los fines que considere sin necesidad de que alguna persona la solicite. Este atendimiento a lo señalado en los artículos 8 y 15 de la Ley de Transparencia y Acceso a la Información Pública del Estado de Jalisco y sus Municipios."/>
                    </div>
                </div>
            </section> */}
            <div className='container process_area  sec_pad pl-30 pr-30 mt_90 mb_90'>
                <div className='features_info text-center responsivomovil'>
                    <div>
                        <h3>Ley de transparencia y Acceso a la información Pública</h3>
                    </div>
                    <div>
                        <p>La información materia de este ordenamiento es un bien del dominio público, cuya titularidad reside en la sociedad, misma que tendrá en todo momento la facultad de disponer de ella para los fines que considere sin necesidad de que alguna persona la solicite. Este atendimiento a lo señalado en los artículos 8 y 15 de la Ley de Transparencia y Acceso a la Información Pública del Estado de Jalisco y sus Municipios.</p>
                    </div>
                </div>
            </div>

            <SupportIntegrationTranspa/>
            {/*<HRService ServiceData={ServiceData}/>{/**esta es la parte de los iconos */}

            {/*<PrototypeService/>esta es la parte de los servicios de la página */}
            
            <div className='container process_area  sec_pad pl-30 pr-30 mt_90'>
                <div className='features_info text-center responsivomovil'>
                    <div>
                        <h3>Dudas o Aclaraciones</h3>
                    </div>
                    <div>
                        <p>Unidad de Transparencia DIF Jocotepec</p>
                        <ul className='text-center'>
                            <li>
                                <a href='tel:3877632799'>Teléfono: 387 763 2799</a>
                            </li>
                            <li>
                                <p>Domicilio: Calle Hidalgo Sur #6 Colonia Centro Jocotepec, Jalisco</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info text-justify">
                        <FeaturesitemsDescrip rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png"  ftitle="Lic Iliana E. de Robles Gómez" descriptions="Titular de la Unidad de Transparencia DIF Jocotepec."/>
                    </div>
                </div>
            </section>
 */}
        
            {/* <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info text-justify">
                        <FeaturesitemsContact rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png"  ftitle="Contacto" descriptions=""/>
                    </div>
                </div>
            </section> */}
            <div className='row'>
            <div className='container text-center pt_160 sec_pad_b'>
                <h3>Mapa del centro de atención:</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1871.1728314798916!2d-103.42925411196433!3d20.285954664046262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50412c7454715305!2sDif%20Municipio%20de%20Jocotepec!5e0!3m2!1ses!2smx!4v1654661346434!5m2!1ses!2smx" width="600" height="450"></iframe>
            </div>
            </div>
            <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/>{/**esta es la parte de los logos de la dependencia */}
            {/*<ServiceSubscribe sClass="s_form_info_two"/>esta es la parte del newssletter */}
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>{/**esta es la parte footer */}
        </div>
    )
}
export default Transparencia;