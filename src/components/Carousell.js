import Carousel from 'react-bootstrap/carousel';
import 'D:/aqsa chikan arts/ecommerce/src/App.css';


function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          id="carousel-image"
          src="https://encrypted-tbn0.gstatic.com/carousel-images?q=tbn:ANd9GcRSdzFceiNraVzdPjfG5XD68emcVDzv2CTBBw&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          id="carousel-image"
          src="https://cdn.shopify.com/s/files/1/0489/2999/6961/products/061A9919_800x.jpg?v=1642507696"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="carousel-image"
          src="https://encrypted-tbn0.gstatic.com/carousel-images?q=tbn:ANd9GcRSdzFceiNraVzdPjfG5XD68emcVDzv2CTBBw&usqp=CAU"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            AQSA CHIKAN ARTS
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;