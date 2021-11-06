import * as React from 'react'

const logo = require('../assets/img/logo.png')

export const Gracias = () => {
    const iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ISpwKDS6_TI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

    return (
        <div className='col-md-8 mx-auto'>
            <div className='text-center'>
                <a href='https://sanaencasa.org'><img style={{ width: '300px', paddingTop: '20px' }} src={ logo } /></a>
            </div>
            <h1 style={{ paddingTop: '20px' }} className='text-center'>¡Muchas gracias por tu generosa donación!</h1>
            <div className='col-md-7 text-center mx-auto'>
                <h4>Síguenos en nuestras redes sociales:</h4>
                <a target='_blank' href='https://www.facebook.com/sanaencasaabp/'><span style={{ color: '#3b5998', fontSize: '50px', paddingBottom: '10px', paddingRight: '10px' }} className='fab fa-facebook'></span></a>
                <a target='_blank' href='https://www.instagram.com/sanaencasa/'><span style={{ color: '#bc2a8d', fontSize: '50px', paddingBottom: '10px', paddingRight: '10px' }} className='fab fa-instagram'></span></a>
                <a target='_blank' href='https://www.youtube.com/channel/UCNG6r8QrVfk5WYGvHQ2qYfA/featured'><span style={{ color: '#ff0000', fontSize: '50px', paddingBottom: '10px' }} className='fab fa-youtube'></span></a>
            </div>
            <div className='col-md-10 text-center mx-auto'>
                <h4>Hay muchas maneras de ayudar!</h4>
                <div dangerouslySetInnerHTML={ { __html: iframe } } />
                <h4><a href='https://sanaencasa.org'>SanaEnCasa.org</a></h4>
            </div>
        </div>
    )
}
