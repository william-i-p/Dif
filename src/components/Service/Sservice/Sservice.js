import React, {Component} from 'react';
import Stserviceitems from './StserviceItem';
import Reveal from 'react-reveal/Reveal';
class Sservice extends Component{
    render(){
        return(
            <section className="agency_service_area bg_color">
                <div className="container">
                    <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_90 wow fadeInUp" data-wow-delay="0.2s"></h2>
                    <div className="row mb_30 text-center">
                        <div className="col-lg-4 col-sm-6">
                        <Reveal effect="fadeInUp" duration={1100}><Stserviceitems iShap="caic2.png"  Sicon="ti-panel" text="CAIC" description="" btn="Read More" bicon="arrow_right"/></Reveal>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                        <Reveal effect="fadeInUp" duration={1400}><Stserviceitems iShap="dentista.png"  Sicon="ti-layout-grid2" text="Dentista" description="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy.!" btn="Read More" bicon="arrow_right"/></Reveal>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                        <Reveal effect="fadeInUp" duration={1700}><Stserviceitems iShap="dermatologia.png"  Sicon="ti-gallery" text="Dermatología" description="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy.!" btn="Read More" bicon="arrow_right"/></Reveal>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                        <Reveal effect="fadeInUp" duration={1100}><Stserviceitems iShap="homeopata.png"  Sicon="ti-panel" text="Homeopatía" description="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy.!" btn="Read More" bicon="arrow_right"/></Reveal>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                        <Reveal effect="fadeInUp" duration={1100}><Stserviceitems iShap="juridico.png"  Sicon="ti-panel" text="Jurídico" description="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy.!" btn="Read More" bicon="arrow_right"/></Reveal>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                        <Reveal effect="fadeInUp" duration={1100}><Stserviceitems iShap="psicologo.png"  Sicon="ti-panel" text="Psicología" description="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy.!" btn="Read More" bicon="arrow_right"/></Reveal>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                        <Reveal effect="fadeInUp" duration={1100}><Stserviceitems iShap="ubr.png"  Sicon="ti-panel" text="Unidad Básica de Rehabilitación" description="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy.!" btn="Read More" bicon="arrow_right"/></Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Sservice;