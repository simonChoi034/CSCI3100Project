import React, { Component } from "react";
import logo from './logo.svg';
import JobsWall from '../components/job_wall/JobsWall';
import TutorsWall from '../components/tutor_wall/TutorsWall';
import './Home.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Card,
  Container
} from 'reactstrap';

import banner1 from '../images/banners/banner1.jpg'
import banner2 from '../images/banners/banner2.jpg'
import banner3 from '../images/banners/banner3.jpg'
import banner4 from '../images/banners/banner4.jpg'
import banner5 from '../images/banners/banner5.jpg'
import banner6 from '../images/banners/banner6.jpg'
import banner7 from '../images/banners/banner7.jpg'


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
    },
    {
        src: banner6,
        altText: 'Banner 6'
    },
    {
        src: banner7,
        altText: 'Banner 7'
    }
  ];

  
class Home extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0, redirect: false, path: '' };
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
            <div>

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

                <Container className="my-3">
                    <Card className="p-3">
                        <h4>Newest Jobs</h4>
                        <JobsWall limit={4} homeCall={true} />
                    </Card>
                </Container>

                <Container className="my-3">
                    <Card className="p-3">
                        <h4>Tutors</h4>
                        <TutorsWall limit={4} homeCall={true} />
                    </Card>
                </Container>
            </div>
        );
            
    
    }
}

export default Home;
