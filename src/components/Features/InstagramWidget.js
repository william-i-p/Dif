import React from 'react'

export default function InstagramWidget() {
   return (
      <div className='row'>
         <div className='container text-center pt_160 sec_pad_b'>
            <iframe
               title='Instagram'
               src="https://www.instagram.com/difjocotepec/embed"
               width='500'
               height='600'
               scrolling='no'
               frameBorder='0'
               allowFullScreen={true}
               allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
            ></iframe>
         </div>
      </div>
   )
}
