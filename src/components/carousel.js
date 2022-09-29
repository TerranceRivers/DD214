import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1oNJ0HPAAynGHwx0CiooJp5XK1RWFSzuq"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1FsNEml8ajTxzz7EkZ8DJj0Ymj9uw-FPF"
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drive.google.com/uc?export=view&id=1Ew9ICGDg5wq-RRbfF2qAXCFkk4mPcHim"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;