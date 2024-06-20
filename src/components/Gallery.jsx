import React from "react";
import Carousel from "react-spring-3d-carousel";

const slides = [
  {
    key: 1,
    content: <img src="https://picsum.photos/800/800/?random" alt="1" />,
  },
  {
    key: 2,
    content: <img src="https://picsum.photos/800/800/?random" alt="2" />,
  },
  {
    key: 3,
    content: <img src="https://picsum.photos/600/800/?random" alt="3" />,
  },
  {
    key: 4,
    content: <img src="https://picsum.photos/800/500/?random" alt="4" />,
  },
  {
    key: 5,
    content: <img src="https://picsum.photos/800/800/?random" alt="5" />,
  },
  {
    key: 6,
    content: <img src="https://picsum.photos/500/800/?random" alt="6" />,
  },
  {
    key: 7,
    content: <img src="https://picsum.photos/800/600/?random" alt="7" />,
  },
  {
    key: 8,
    content: <img src="https://picsum.photos/800/800/?random" alt="8" />,
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <input type="radio" name="position" checked />
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <main id="carousel">
        <div class="item">
          <img src="images/1.jpg" />
          <h3 class="name">Sally Sharpe</h3>
          <p class="occupation">Marketing Admin</p>
          <p class="testimonial">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            suscipit?
          </p>
        </div>
        <div class="item">
          <img src="images/2.jpg" />
          <h3 class="name">Michael John</h3>
          <p class="occupation">Cybersecurity Engineer</p>
          <p class="testimonial">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            dolore.
          </p>
        </div>
        <div class="item">
          <img src="images/3.jpg" />
          <h3 class="name">Mikayla Eddie</h3>
          <p class="occupation">Software Engineer</p>
          <p class="testimonial">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur, temporibus?
          </p>
        </div>
        <div class="item">
          <img src="images/4.jpg" />
          <h3 class="name">Eve Smith</h3>
          <p class="occupation">UI/UX Designer</p>
          <p class="testimonial">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
            beatae?
          </p>
        </div>
        <div class="item">
          <img src="images/5.jpg" />
          <h3 class="name">Luke Maxwell</h3>
          <p class="occupation">System Architect</p>
          <p class="testimonial">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
            tempore.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
