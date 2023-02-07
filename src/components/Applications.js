import { Fragment } from 'react';
import { ApplicationData } from './ApplicationData';
import { Card, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { GithubFilled, GlobalOutlined } from "@ant-design/icons";

export default function Applications() {
    return (
        <Fragment>
            {ApplicationData.map(({ applicationTitle, id, applicationImage, github, applicationLink }) => (
                <div style={{ marginBottom: '1rem' }} key={id}>
                    <Row style={{ fontSize: '200%', textDecoration: 'none', color: 'black' }} xs={3} >
                        <Col xs={8} lg={9}>
                            <Card.Link style={{ textDecoration: 'none', color: 'black' }} href={`/application/${id}`}>{applicationTitle}</Card.Link>
                        </Col>
                        <Col style={{ margin: '.5rem' }} xs={1} >
                            <Card.Link style={{ position: 'relative', textDecoration: 'none', color: 'black' }} href={applicationLink} target='_blank' rel="noreferrer"><GlobalOutlined style={{ position: 'absolute', top: '0' }}/></Card.Link>
                        </Col>
                        <Col style={{ margin: '.5rem' }} xs={1} >
                            <Card.Link style={{ position: 'relative', textDecoration: 'none', color: 'black' }} href={github} target='_blank' rel="noreferrer"><GithubFilled style={{ position: 'absolute', top: '0' }}/></Card.Link>
                        </Col>
                    </Row>
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
                                items: 2,
                                partialVisibilityGutter: 0,
                                slidesToSlide: 2
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
                                items: 1,
                                partialVisibilityGutter: 30,
                                slidesToSlide: 1
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
                            {applicationImage.map((image) => (
                                <Card key={image} className="me-3 bg-dark text-white">
                                    <Card.Img height='200' style={{ objectFit:'cover'}} src={image} alt={applicationTitle}/>
                                </Card>
                            ))}
                        </Carousel>
                    </div>
            ))}
        </Fragment>
    );
}