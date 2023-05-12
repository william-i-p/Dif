import React from 'react';

const FacebookWidget = () =>{

    return (
       <div className='row'>
          <div className='container text-center pt_160 sec_pad_b'>
             <h3>NUESTRAS REDES SOCIALES</h3>
             <iframe
                title='Facebook'
                src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FJocotepecDIF&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=158623011428628'
                width='500'
                height='500'
                scrolling='no'
                frameBorder='0'
                allowFullScreen={true}
                allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
             ></iframe>
          </div>
       </div>
    )

}

export default FacebookWidget;