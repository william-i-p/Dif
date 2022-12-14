import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import Partner from '../components/Partner';
import BreadcrumbServ from '../components/BreadcrumbServ';

const Caic = () => {

    return (

        <div className="body_wrapper">
            <CustomNavbar mClass="menu_tracking" nClass="mr-auto" hbtnClass="tracking_btn"/>
            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Centro de Asistencia Infantil Comunitario (CAIC)" Pdescription=""/> */}
            <BreadcrumbServ breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Centro de Asistencia Infantil Comunitario (CAIC)" Pdescription="" imgServ="home4/caic2.png" />
            <div className='container process_area  sec_pad pl-30 pr-30 mt_90 mb_20'>
                <div className='features_info text-center responsivomovil'>
                    <div>
                        <h3>OBJETIVO</h3>
                    </div>
                    <div>
                        <p className='text-justify'>CAIC tiene como objetivo proporciona protección y formación general a un mayor número de niñas y niños entre 2 y 5 años a 11 meses que se encuentran en situaciones de vulnerabilidad, a través de acciones educativas y asistenciales que proporcione la interacción con la familia, con la sociedad y con su ambiente, para que logren en un futuro integrarse en condiciones favorables a los procesos de desarrollo del país.</p>
                    </div>
                </div>
            </div>

            <div className='row'>
            <div className='container text-center pt_160 sec_pad_b'>
                <h3>MAPA DEL CENTRO DE ATENCIÓN:</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.483121180778!2d-103.4301467!3d20.2802604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f5c0b65207689%3A0xd73d3f80d12733cb!2sDonato%20Guerra%20Pte.%2022%2C%20Unidad%20Deportiva%20Sur%2C%2045800%20Jocotepec%2C%20Jal.!5e0!3m2!1ses!2smx!4v1656043151393!5m2!1ses!2smx" width="600" height="450"></iframe>
            </div>
            </div>

            <div className='container process_area  sec_pad pl-30 pr-30 mt_20 mb_90'>
                <div className='features_info text-center responsivomovil'>
                <h3>DATOS DE CONTACTO:</h3>
                <h2>Dirección:</h2>
                <p>Donato Guerra oriente #22</p>
                <h2>Horario:</h2>
                <p>Lunes a Viernes de 8:00 a 14:30 horas</p>
                <h2>Teléfono:</h2>
                <a href='tel:3877632799'>387 763 27 99</a>
                </div>
            </div>
            <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/>{/**esta es la parte de los logos de la dependencia */}
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>

        </div>
    );

}

export default Caic;