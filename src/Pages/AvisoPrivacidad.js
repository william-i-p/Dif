import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Partner from '../components/Partner';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import { useScrollToTop } from '../hooks/useScrollToTop';

const aviso_data = [
   {
      component: 'p',
      content: `El Sistema para el Desarrollo Integral de la Familia del  Municipio de Jocotepec, Jalisco, con domicilio ubicado en la
      calle Hidalgo No. 6, colonia centro del municipio de
      Jocotepec, Jalisco, es responsable del uso y protección de sus
      datos personales, motivo por el cual se emite el presente
      aviso se privacidad y se hace de su conocimiento lo siguiente:`,
   },
   {
      component: 'p',
      content: `Los datos personales son toda aquella información concerniente a una
      persona física identificada o identificable, en tanto que los datos
      personales sensibles son aquellos que se refieren a la esfera más íntima
      de su titular, o cuya utilización indebida pueda dar origen a
      discriminación o conlleve un riesgo grave para éste.`,
   },
   {
      component: 'p',
      content: `El tratamiento de sus datos personales se realiza con fundamento en lo
      establecido en el artículo 23 de la Ley General de Transparencia y
      Acceso a la Información Pública, los artículos 20, 21, 22, 23 punto 1,
      fracciones II y III, 24 punto 1 fracción V y 25 fracciones XV, XVII y XX
      de la Ley de Transparencia y Acceso a la Información Pública del
      Estado de Jalisco y sus Municipios; artículo 28 de la Ley General de
      Protección de Datos Personales en Posesión de los Sujetos Obligados,
      en el artículo 24 de la Ley de Protección de Datos Personales en
      Posesión de Sujetos Obligados del Estado de Jalisco y sus Municipios;
      lo señalado en el Reglamento Interno del Sistema DIF Jocotepec en su
      Art.30, Art.31, Art.32; el artículo 115 de la Constitución Política de los
      Estado Unidos Mexicanos respecto de la conformación y facultades de
      los Ayuntamientos Municipales así como los concernientes a la Ley
      Federal del Trabajo y la Ley de Servidores Públicos del Estado de
      Jalisco y sus Municipios.`,
   },
   {
      component: 'p',
      content: `Serán sometidos a tratamiento por este Organismo Público
      Descentralizado únicamente los siguientes datos personales:`,
   },
   {
      component: 'ul',
      content: [
         'Nombre completo',
         'Sexo',
         'Estado Civil',
         'Nombre del niño (concursos o talleres)',
         'Huella digital',
         'Datos biométricos',
         'Datos de salud Rostro (reconocimiento facial)',
         'Origen étnico y Racial',
         'Filiación política',
         'Preferencias Sexuales',
         'Discapacidades',
         'Firma',
         'Imágenes',
         'Fotografía',
         'Grado Grupo',
         'Correo electrónico Cargo/ puesto',
         'Ocupación',
         'Domicilio',
         'CURP',
         'Clave de elector',
         'Fecha de nacimiento',
         'Imagen y video',
         'Número de teléfono',
         'Clave de Elector',
         'Pseudónimo',
         'Nacionalidad',
         'Rasgos Físicos',
         'Número de licencia de conducir',
         'Escuela de Procedencia',
         'Escolaridad Grado Máximo de Estudios',
         'Institución Educativa Estatus Carrera/ área de conocimiento',
         'Conocimiento en idiomas Título/ Cédula Profesional',
         'Razón Social',
         'Registro Federal de Contribuyentes',
         'Giro Comercial',
         'Número de cuenta bancaria',
         'Datos personales sensibles que requieren de especial atención, estado de salud física o mental, información genética.',
      ],
   },

   {
      component: 'p',
      renderHTML: true,
      content: `Los datos personales antes citados, podrán ser obtenidos de forma
      directa o indirecta por el Sistema DIF Jocotepec, a través de medios
      electrónicos (de los cuales no se hace el uso o almacenamiento de
      cookies), por escrito o por teléfono y únicamente serán utilizados para
      el cumplimiento de los objetivos, facultades, atribuciones y obligaciones
      de este organismo señalados en el Reglamento Interno del Sistema
      para el Desarrollo Integral de la Familia del Municipio de Jocotepec,
      Jalisco así como en el Decreto Número 12448 de la Creación del OPD
      de la Administración Municipal con Personalidad Jurídica y Patrimonio
      Propio denominado Sistema DIF Jocotepec, Jalisco; los cuales podrán
      ser consultados en la página <a href="https://jocotepec.gob.mx/" target="_blank"> https://jocotepec.gob.mx/ </a> :`,
   },

   {
      component: 'ul',
      content: [
         'Otorgamiento de programas y servicios',
         'Análisis clínicos',
         'Servicios odontológicos',
         'Asesorías jurídicas',
         'Atención a la violencia familiar',
         'Protección a niños, niñas y adolescentes',
         'Ayuda alimentaria',
         'Inscripciones a guarderías, extraescolar, preescolar',
         'Comedor asistencial',
         'Cursos',
         'Talleres',
         'Atención psicológica',
         'Apoyos asistenciales',
         'Tramitación de solicitudes de información y ejercicio de derechos ARCO',
         'Capacitaciones',
         'Tramites y asuntos administrativos',
         'Seguimiento a quejas presentadas contra servidores públicos de DIF Jocotepec',
         'Registro de las personas físicas o morales que fungen como proveedores de bienes y servicios de este Organismo; y',
         'Celebración de convenios o contratos con personas físicas y/o morales.',
      ],
   },

   {
      component: 'p',
      content: `Los datos proporcionados estarán bajo el resguardo y la protección de
      cada Dirección, Departamento o Área competente de recabarlos, por lo
      que este Sujeto Obligado no realiza tratamiento distinto de aquel para
      el cual fueron obtenidos y serán almacenados con la seguridad
      necesaria para su protección con las siguientes finalidades:`,
   },

   {
      component: 'ul',
      content: [
         'Elaborar el nombramiento del servidor público.',
         'Integrar expediente del personal.',
         'Alta en la nómina electrónica del Instituto a fin de cumplir con los requisitos legales para la contratación y llevar a cabo el pago de sueldos, salarios, prestaciones.',
         'Realizar comprobantes de pago con respecto a los sueldos y  deducciones de los trabajadores.',
         'Cumplimiento de medidas de seguridad administrativas tales como controles de acceso.',
         'Realizar las identificaciones de los empleados de esta institución.',
         'Emisión de constancias laborales, administrativas relativas al empleo, cargo o comisión de los servidores públicos.',
         'Difusión de información pública de oficio.',
         'Emitir respuesta a las solicitudes de información que se presenten.',
         'Control Interno',
         'Auditorías',
         'Fiscalización',
         'Fincamiento de responsabilidades (en su caso)',
         'Registro de entradas y salidas del personal a través del reloj checador (mediante huellas digital y/o reconocimiento facial) y  cámaras de seguridad.',
      ],
   },

   {
      component: 'p',
      content: `Con relación a la transferencia de información confidencial,
      los terceros receptores de los Datos Personales pueden
      ser: Autoridades Judiciales, el Agente del Ministerio
      Público, la Auditoría Superior del Estado con la finalidad de
      dar atención a los requerimientos judiciales o legales, el
      Sistema para el Desarrollo Integral de la Familia del Estado de Jalisco,
      así como los Sistemas DIF Municipales del Estado de Jalisco con la
      finalidad de dar seguimiento a programas o servicios, el Instituto de
      Transparencia Información Pública y Protección de Datos Personales
      del Estado de Jalisco (ITEI) para cumplir con las obligaciones de
      transparencia, las autoridades Federales, Estatales y Municipales,
      siempre que los datos se utilicen para el ejercicio de sus facultades y
      atribuciones.`,
   },

   {
      component: 'p',
      content: `Usted puede solicitar ante el DIF Jocotepec en cualquier tiempo, su
      Acceso, Rectificación, Cancelación, Oposición o Revocación del
      consentimiento, mediante la presentación de solicitud de ejercicio de
      derechos ARCO y podrán hacerlo ante la Unidad de Transparencia del
      Sistema DIF Jocotepec, calle Hidalgo No. 6, colonia centro en el
      municipio de Jocotepec, Jalisco.`,
   },

   {
      component: 'p',
      renderHTML: true,
      content: `Cualquier cambio al presente aviso de privacidad se hará del
      conocimiento de los titulares de la información confidencial a través de
      la página de internet del sujeto obligado <a href="https://jocotepec.gob.mx/" target="_blank">https://jocotepec.gob.mx/</a>
      en la que también podrá consultar el presente aviso de privacidad.`,
   },
];

const AvisoPrivacidad = () => {
   useScrollToTop();

   return (
      <div className='body_wrapper'>
         <CustomNavbar
            mClass='menu_tracking'
            nClass='mr-auto'
            hbtnClass='tracking_btn'
         />
         <Breadcrumb
            breadcrumbClass='breadcrumb_area'
            imgName='breadcrumb/banner_bg.png'
            Ptitle='Aviso de privacidad'
            Pdescription='OPD Sistema DIF Jocotepec'
         />

         <div className='container process_area  sec_pad pl-30 pr-30 mt_90 mb_90'>
            <div className='features_info responsivomovil text-justify'>
               {aviso_data.map((item) => {
                  if (item.component === 'p' && item.renderHTML) {
                     return (
                        <p dangerouslySetInnerHTML={{ __html: item.content }} />
                     );
                  }

                  if (item.component === 'p') {
                     return <p> {item.content}</p>;
                  }

                  if (item.component === 'ul') {
                     return (
                        <ul style={{ listStyle: 'initial' }}>
                           {item.content.map((listItem) => (
                              <li> {listItem}</li>
                           ))}
                        </ul>
                     );
                  }

                  return <></>;
               })}
            </div>
         </div>

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
                        <p>
                           Domicilio: Calle Hidalgo Sur #6 Colonia Centro
                           Jocotepec, Jalisco
                        </p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

         <div className='row'>
            <div className='container text-center pt_160 sec_pad_b'>
               <h3>Mapa del centro de atención:</h3>
               <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1871.1728314798916!2d-103.42925411196433!3d20.285954664046262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50412c7454715305!2sDif%20Municipio%20de%20Jocotepec!5e0!3m2!1ses!2smx!4v1654661346434!5m2!1ses!2smx'
                  width='600'
                  height='450'
               ></iframe>
            </div>
         </div>
         <Partner pClass='partner_logo_area_two' pClasst='pt-0 mb-0' />
         {/**esta es la parte de los logos de la dependencia */}
         {/*<ServiceSubscribe sClass="s_form_info_two"/>esta es la parte del newssletter */}
         <FooterTwo fClass='pt_150' FooterData={FooterData} />
         {/**esta es la parte footer */}
      </div>
   );
};
export default AvisoPrivacidad;
