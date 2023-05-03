import React, {Component} from 'react';
import NewsCarousel from '../NewsCarousel';

class News extends Component{
    render(){
        return(
            
            <section className="tracking_product_area sec_pad">
                <div className="container text-center">
                    <h3>NUESTRAS NOTICIAS</h3><br></br>
                </div>
                <div className="container">
                    <NewsCarousel />
                </div>
            </section>
        )
    }
}

export default News;