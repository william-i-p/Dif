import React, {Component} from 'react';

class Partner extends Component {
    render(){
        var {pClass,pClasst} = this.props;
        return(
            <section className={`${pClass}`}>
                <div className="container">
                    <div className={`partner_logo_area_four ${pClasst}`}>
                       {/*<h4 className="f_size_18 f_400 f_p text-center l_height28 mb_70">Market leaders use app to nrich their brand & business.</h4> */} 
                        <div className="row partner_info">
                            <div  >
                                <a href="https://www.itei.org.mx/v4/" target="_blank"><img className='altura' src={require ('../img/home-tracking/itei.jpg')} alt=""/></a>
                            </div>
                            <div  data-wow-delay="0.2s">
                                <a href="https://www.infomexjalisco.org.mx/InfomexJalisco/" target="_blank"><img className='altura' src={require ('../img/home-tracking/infomex.jpg')} alt=""/></a>
                            </div>
                            <div  data-wow-delay="0.3s">
                                <a href="https://snt.org.mx/" target="_blank"><img className='altura' src={require ('../img/home-tracking/sinatra.jpg')} alt=""/></a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Partner;