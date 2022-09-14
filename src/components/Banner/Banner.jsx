import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./banner.css"

function Banner() {
  return (
    <section>
    <h1 className="review_head">Happy Clients</h1>
    <hr/>
   <Carousel variant="dark">
      <Carousel.Item>
      <h1>⭐️⭐️⭐️⭐️⭐️</h1>
        <img 
          className="p_pic"
          src="https://staticg.sportskeeda.com/editor/2019/09/03ead-15688918737420-800.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>John Cena</h5>
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis "</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h1>⭐️⭐️⭐️⭐️⭐️</h1>
        <img 
          className="p_pic"
          src="https://staticg.sportskeeda.com/editor/2019/09/03ead-15688918737420-800.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>John Cena</h5>
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis "</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h1>⭐️⭐️⭐️⭐️⭐️</h1>
        <img 
          className="p_pic"
          src="https://staticg.sportskeeda.com/editor/2019/09/03ead-15688918737420-800.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>John Cena</h5>
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis "</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h1>⭐️⭐️⭐️⭐️⭐️</h1>
        <img 
          className="p_pic"
          src="https://staticg.sportskeeda.com/editor/2019/09/03ead-15688918737420-800.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>John Cena</h5>
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis "</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    


  )
}

export default Banner