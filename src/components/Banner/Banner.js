import { Container } from "react-bootstrap"
import Banner1 from '../../assets/banner1.jpeg'
import Banner2 from '../../assets/banner2.jpeg'
import Banner3 from '../../assets/banner3.jpeg'
import Banner4 from '../../assets/banner4.jpeg'
import Carousel from 'react-bootstrap/Carousel';

import './Banner.css';


const Banner = () =>{
    return(
        <>
        <Container>
        <Carousel>
      <Carousel.Item>
      <img src={Banner1}  alt="Promoção de Pizza" className="bannerImage" />
      </Carousel.Item>

      <Carousel.Item>
      <img src={Banner2}  alt="Promoção de Pizza" className="bannerImage" />
      </Carousel.Item>

      <Carousel.Item>
      <img src={Banner3}  alt="Promoção de Pizza" className="bannerImage" />
      </Carousel.Item>

      <Carousel.Item>
      <img src={Banner4}  alt="Promoção de Pizza" className="bannerImage" />
      </Carousel.Item>

    </Carousel>
        </Container>
        
        </>
    )
}

export default Banner;