import Carousel from 'react-bootstrap/carousel';
import 'D:/aqsa chikan arts/ecommerce/src/App.css';


function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
        <img
          id="carousel-image"
          src="https://cdn.discordapp.com/attachments/1000276792050982913/1023650887350096014/IMG-20220617-WA0010.jpg"
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
          src="https://cdn.discordapp.com/attachments/1000276792050982913/1023650887106834472/IMG-20220712-WA0000.jpg"
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
          src="https://i.imgur.com/NYolWlsh.jpg"
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