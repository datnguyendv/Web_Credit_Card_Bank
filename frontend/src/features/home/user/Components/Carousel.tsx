import React from 'react';
import { Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap';

export const HomeCarousel: React.FC = () => {
    return (
        <Carousel
            activeIndex={0}
            next={function noRefCheck(){}}
            previous={function noRefCheck(){}}
        >
            <CarouselIndicators
                activeIndex={0}
                items={[
                {
                    altText: 'Slide 1',
                    caption: 'Slide 1',
                    key: 1,
                    src: ''
                },
                {
                altText: 'Slide 2',
                caption: 'Slide 2',
                key: 2,
                src: ''
                },
                {
                altText: 'Slide 3',
                caption: 'Slide 3',
                key: 3,
                src: ''
                }
            ]}
                onClickHandler={function noRefCheck(){}}
            />
            <CarouselItem
                onExited={function noRefCheck(){}}
                onExiting={function noRefCheck(){}}
            >
            <img
                alt="Slide 1"
                src=""
            />
            <CarouselCaption
                captionHeader="Slide 1"
                captionText="Slide 1"
            />
            </CarouselItem>
            <CarouselItem
                onExited={function noRefCheck(){}}
                onExiting={function noRefCheck(){}}
            >
            <img
                alt="Slide 2"
                src=""
            />
            <CarouselCaption
                captionHeader="Slide 2"
                captionText="Slide 2"
            />
            </CarouselItem>
            <CarouselItem
                onExited={function noRefCheck(){}}
                onExiting={function noRefCheck(){}}
            >
            <img
                alt="Slide 3"
                src=""
            />
            <CarouselCaption
                captionHeader="Slide 3"
                captionText="Slide 3"
            />
            </CarouselItem>
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={function noRefCheck(){}}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={function noRefCheck(){}}
            />
            </Carousel>
        )
}