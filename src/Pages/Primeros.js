import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import FooterTwo from '../components/Footer/FooterTwo';
import Partner from '../components/Partner';
import FooterData from '../components/Footer/FooterData';
import BreadcrumbServ from '../components/BreadcrumbServ';

const Primeros = () => {

    return (
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_tracking" nClass="mr-auto" hbtnClass="tracking_btn"/>{/* ESTA ES LA PARTE DEL MENU DEL HOME */}
            {/*<CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/> */}
            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Primeros 1000 Días de Vida" Pdescription=""/> */}
            <BreadcrumbServ breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Primeros 1000 días de vida" Pdescription="" imgServ="new-home/1000dias.png" />

            <div className='container process_area  sec_pad pl-30 pr-30 mt_90 mb_20'>
                <div className='features_info text-center responsivomovil'>
                    <div>
                        <h3>OBJETIVO</h3>
                    </div>
                    <div>
                        <p className='text-justify'>Se tiene como objetivo ayudar a la población en su alimentación complementaria durante sus primeros 1000 días de vida, es decir, desde la etapa de embarazo hasta los primeros 2 años de edad, dando prioridad a las personas con mayor grado de marginación,  desnutrición y obesidad.</p>
                    </div>
                </div>
                <div className='features_info text-center responsivomovil'>
                    <div>
                        <h3>REQUISITOS</h3>
                        <p>1. CURP</p>
                <p>2. INE</p>
                <p>3. Comprobante de Domicilio Vigente</p>
                <p>4. INE del reponsable de recoger la despensa en caso de no poder recogerla el beneficiario</p>
                <p className='text-justify'>Las inscripciones se realizan de manera anual comenzando el mes de noviembre y terminando el més de febrero. Las listas de los beneficiarios serán publicadas por medios electrónicos, de manera física en las oficinas centrales de DIF Jocotepec y en las delegaciones.</p>
                    </div>
                    <div>
                        <p className='text-justify'>Se tiene como objetivo ayudar a la población en su alimentación complementaria durante sus primeros 1000 días de vida, es decir, desde la etapa de embarazo hasta los primeros 2 años de edad, dando prioridad a las personas con mayor grado de marginación,  desnutrición y obesidad.</p>
                    </div>
                </div>
            </div>

            <div className='row'>
            <div className='container text-center pt_160 sec_pad_b'>
                <h3>MAPA DEL CENTRO DE ATENCIÓN:</h3>
            <iframe title="Mapa"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.3369660319595!2d-103.43261758507965!3d20.28631488640522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f5bf570930269%3A0x1ece9fa45e10c2dc!2sC.%20Hidalgo%20Eje%20Sur%206%2C%20Jocotepec%20Centro%2C%2045800%20Jocotepec%2C%20Jal.!5e0!3m2!1ses!2smx!4v1652996368960!5m2!1ses!2smx" width="600" height="450"></iframe>
            </div>
            </div>

            <div className='container process_area  sec_pad pl-30 pr-30 mt_90 mb_90'>
                <div className='features_info text-center responsivomovil'>
                <h3>DATOS DE CONTACTO:</h3>
                <h2>Dirección:</h2>
                <p>Calle Hidalgo #6 Centro, Jocotepec</p>
                <h2>Horario:</h2>
                <p>Lunes a Viernes de 9:00 a 15:00 horas</p>
                <h2>Teléfono:</h2>
                <a href='tel:3877632799'>387 763 27 99</a>
                </div>
            </div>

            <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/>{/**esta es la parte de los logos de la dependencia */}
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>{/**esta es la parte footer */}
        </div>

    );

}
export default Primeros;