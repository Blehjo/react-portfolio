import { ApplicationData } from './ApplicationData';
import { PlayCircleFilled, GithubFilled } from '@ant-design/icons'
import { Card, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import { Fragment } from 'react';

export default function Polari() {
    return (
        <Fragment>
            {ApplicationData.map(({ applicationTitle, id, applicationImage, github, applicationLink }) => (
                <Row key={id} xs={1} sm={1} md={1} lg={1} xl={1} className="g-4 pt-3">
                    <h1 className="">{applicationTitle}</h1>
                    <Col >
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
                                {/* {applicationImage.map((image) => ( */}
                                    <Card className="mx-2 bg-dark text-white" key={id}>
                                        <Card.Link className="event-card card-info"href={`/event/${applicationTitle}`}>
                                            {/* <Card.Img src={require("../")}/> */}
                                        </Card.Link>
                                    </Card>
                                {/* // ))} */}
                        </Carousel>
                    </Col>
                </Row>
            ))}
        </Fragment>
    )
}