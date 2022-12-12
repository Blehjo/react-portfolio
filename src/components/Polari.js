import { Fragment, useContext } from 'react';
import { ApplicationData } from './ApplicationData';
import { Card, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { ApplicationContext } from '../contexts/application.context';

export default function Polari() {
    const { application, setApplication } = useContext(ApplicationContext);

    const handleClickEvent = (evt) => {
        evt.preventDefault();
        setApplication(evt.target.value);
    };

    const photos = [
        "https://storage.googleapis.com/pod_public/1300/128652.jpg",
        "https://storage.googleapis.com/pod_public/1300/128652.jpg",
        "https://storage.googleapis.com/pod_public/1300/128652.jpg",
        "https://storage.googleapis.com/pod_public/1300/128652.jpg",
        "https://storage.googleapis.com/pod_public/1300/128652.jpg",
    ];

    return (
        <Fragment>
            {ApplicationData.map(({ applicationTitle, id, applicationImage, github, applicationLink }) => (
                <Fragment>
                <h1 className="">{applicationTitle}</h1>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 4,
                            partialVisibilityGutter: 0,
                            slidesToSlide: 4
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30,
                            slidesToSlide: 1
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30,
                            slidesToSlide: 2
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    swipeable
                    >
                        {photos.map((image) => (
                            <Card className="mx-2 bg-dark text-white">
                                <Card.Img src={image}/>
                            </Card>
                        ))}
                </Carousel>
                </Fragment>
            ))}
        </Fragment>
    )
}