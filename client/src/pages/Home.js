import React, { Component } from "react";
import logo from './logo.svg';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import banner1 from '../images/banner/banner1.jpg'
import banner2 from '../images/banner/banner2.jpg'
import banner3 from '../images/banner/banner3.jpg'
import banner4 from '../images/banner/banner4.jpg'
import banner5 from '../images/banner/banner5.jpg'
import './Home.css'
const items = [
    {
        src: banner1,
        altText: 'Banner 1',
    },
    {
        src: banner2,
        altText: 'Banner 2'
    },
    {
        src: banner3,
        altText: 'Banner 3'
    },
    {
        src: banner4,
        altText: 'Banner 4'
    },
    {
        src: banner5,
        altText: 'Banner 5'
    }
  ];

  
class Home extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
        const { activeIndex } = this.state;
    
        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
              className="carousel-box"
            >
              <img src={item.src} alt={item.altText} />
            </CarouselItem>
          );
        });
    
        return (
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        );
    
    
    }
}

export default Home;
