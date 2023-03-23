import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import Partner from '../components/Partner';
import BreadcrumbServ from '../components/BreadcrumbServ';


const Homeopatia = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_tracking" nClass="mr-auto" hbtnClass="tracking_btn"/>
            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Homeopatia" Pdescription=""/> */}
            <BreadcrumbServ breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Homeopatía" Pdescription="" imgServ="home4/homeopata.png" />
            <div className='container process_area  sec_pad pl-30 pr-30 mt_90 mb_20'>
                <div className='features_info text-center responsivomovil'>
                    <div>
                        <h3>OBJETIVO</h3>
                    </div>
                    <div>
                        <p className='text-center'>Preocupados por la salud y bienestar de todos los integrántes de la familia, DIF Jocotepec pone a su servicio la atención homeopatica utlizada para tratar o prevenir distintos tipos de enfermedades como resfriados, migrañas, dolor de garganta, asma o artritis, entre otras. Esto atendido desde el enfoque natural al tratamiento de las diferentes patologías.</p>
                    </div>
                </div>
            </div>

            <div className='container process_area  sec_pad pl-30 pr-30 mb_20'>
                <div className='features_info text-center responsivomovil'>
                    <div>
                        <h3>COSTO</h3>
                    </div>
                    <div>
                        <p>$20.00 mxn</p>
                    </div>
                </div>
            </div>

            <div className='row'>
            <div className='container text-center pt_160 sec_pad_b'>
                <h3>MAPA DEL CENTRO DE ATENCIÓN:</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.3369660319595!2d-103.43261758507965!3d20.28631488640522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f5bf570930269%3A0x1ece9fa45e10c2dc!2sC.%20Hidalgo%20Eje%20Sur%206%2C%20Jocotepec%20Centro%2C%2045800%20Jocotepec%2C%20Jal.!5e0!3m2!1ses!2smx!4v1652996368960!5m2!1ses!2smx" width="600" height="450"></iframe>
            </div>
            </div>

            <div className='container process_area  sec_pad pl-30 pr-30 mt_20 mb_90'>
                <div className='features_info text-center responsivomovil'>
                <h3>DATOS DE CONTACTO:</h3>
                <h2>Dirección:</h2>
                <a>Calle Hidalgo #6 Centro, Jocotepec</a>
                <h2>Horario:</h2>
                <p>Martes y Miercoles 11:00 a 14:00 horas</p>
                <h2>Teléfono:</h2>
                <a href='tel:3877632799'>387 763 27 99</a>
                </div>
            </div>


            <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/>{/**esta es la parte de los logos de la dependencia */}
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>

        </div>

    );

}

export default Homeopatia;