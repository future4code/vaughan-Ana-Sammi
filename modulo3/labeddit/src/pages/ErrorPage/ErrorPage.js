import React from 'react' 
import erro404 from './img/erro404.jpg'
import {ImgContainer, Image} from './style'


function ErrorPage() {
    return(
        <ImgContainer>
           <Image src={erro404}/>
        </ImgContainer>
    )
}

export default ErrorPage;