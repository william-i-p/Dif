import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import FooterTwo from '../components/Footer/FooterTwo';
import Partner from '../components/Partner';
import FooterData from '../components/Footer/FooterData';
import BreadcrumbServ from '../components/BreadcrumbServ';

const Talleres = () =>{
    return (
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_tracking" nClass="mr-auto" hbtnClass="tracking_btn"/>{/* ESTA ES LA PARTE DEL MENU DEL HOME */}
            {/*<CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/> */}
            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Talleres" Pdescription=""/> */}
            <BreadcrumbServ breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Talleres" Pdescription="" imgServ="new-home/tae.png" />
            {/* <div class="row mb-3 pl_100 pr_100 mt_100 mb_100">
            <div class="col-lg-6">
            <h3 className='text-center'>Objetivo:</h3>
                <p className='text-justify'>Procurando la atención y el bienestar físico y emocional de nuestros niños, adolescentes y adultos mayores DIF Jocotepec pone a su alcance diversos talleres donde podrán desarrollar nuevas habilidades creativas y recreacionales fomentando y procurando en todo momento un sano esparcimiento.</p>
            </div>
            <div class="col-lg-6 text-center">
                <div>
                <h3>Talleres para Niñas, Niños y<br/> Adolescentes:</h3>
                <p>1. Panadería</p>
                <p>2. Computación</p>
                <p>3. Musica</p>
                <p>4. Sublimación</p>
                <p>5. Pintura en Piedra</p>
                <p>6. Huerto Familiar</p>
                <p>7. Clases de Ingles</p>
                <p>8. Ludomovil</p>
                <h3>Talleres para Adultos Mayores:</h3>
                <p>1. Sol de Luna</p>
                <p>2. Volver a Sonreir</p>
                <p>3. Flore de Vida</p>
                <p>4. Jardín de Amor</p>
                <p>5. Nuevo Amanecer</p>
                <h3>Dirección:</h3>
                <p>Calle Hidalgo #6 Centro, Jocotepec</p>
                <h3>Horario:</h3>
                <p>Lunes a Viernes de 9:00 a 15:00 horas</p>
                <h3>Teléfono:</h3>
                <a href='tel:3877632799'>387 763 27 99</a>
                </div>
            </div>
            </div>
            <div className='row'>
            <div className='container text-center pt_160 sec_pad_b'>
                <h3>Mapa del centro de atención:</h3>
            <iframe title="Mapa"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.3369660319595!2d-103.43261758507965!3d20.28631488640522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f5bf570930269%3A0x1ece9fa45e10c2dc!2sC.%20Hidalgo%20Eje%20Sur%206%2C%20Jocotepec%20Centro%2C%2045800%20Jocotepec%2C%20Jal.!5e0!3m2!1ses!2smx!4v1652996368960!5m2!1ses!2smx" width="600" height="450"></iframe>
            </div>
            </div> */}



            <div className='container process_area  sec_pad pl-30 pr-30 mt_90 mb_20'>
                <div className='features_info text-center responsivomovil'>
                    <div>
                        <h3>OBJETIVO</h3>
                    </div>
                    <div>
                        <p className='text-justify'>Procurando la atención y el bienestar físico y emocional de nuestros niños, adolescentes y adultos mayores DIF Jocotepec pone a su alcance diversos talleres donde podrán desarrollar nuevas habilidades creativas y recreacionales fomentando y procurando en todo momento un sano esparcimiento.</p>
                    </div>
                </div>
            </div>

            <div className='container process_area  sec_pad pl-30 pr-30 mt_20 mb_20'>
                <div className='features_info text-center responsivomovil'>
                <h3>Talleres para Niñas, Niños y Adolescentes:</h3>
                <p>1. Panadería</p>
                <p>2. Computación</p>
                <p>3. Musica</p>
                <p>4. Sublimación</p>
                <p>5. Pintura en Piedra</p>
                <p>6. Huerto Familiar</p>
                <p>7. Clases de Ingles</p>
                <p>8. Ludomovil</p>
                </div>
            </div>

            <div className='container process_area  sec_pad pl-30 pr-30 mt_20 mb_20'>
                <div className='features_info text-center responsivomovil'>
                <h3>Talleres para Adultos Mayores:</h3>
                <p>1. Sol de Luna</p>
                <p>2. Volver a Sonreir</p>
                <p>3. Flore de Vida</p>
                <p>4. Jardín de Amor</p>
                <p>5. Nuevo Amanecer</p>
                </div>
            </div>

            <div className='row'>
            <div className='container text-center pt_120 sec_pad_b'>
                <h3>MAPA DEL CENTRO DE ATENCIÓN:</h3>
            <iframe title="Mapa"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.3369660319595!2d-103.43261758507965!3d20.28631488640522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f5bf570930269%3A0x1ece9fa45e10c2dc!2sC.%20Hidalgo%20Eje%20Sur%206%2C%20Jocotepec%20Centro%2C%2045800%20Jocotepec%2C%20Jal.!5e0!3m2!1ses!2smx!4v1652996368960!5m2!1ses!2smx" width="600" height="450"></iframe>
            </div>
            </div>

            <div className='container process_area  sec_pad pl-30 pr-30 mt_20 mb_90'>
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
export default Talleres;