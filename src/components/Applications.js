import { Fragment } from 'react';
import { ApplicationData } from './ApplicationData';
import { Card, Nav } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { GithubFilled, GlobalOutlined } from "@ant-design/icons";

export default function Applications() {
    return (
        <Fragment>
            {ApplicationData.map(({ applicationTitle, id, applicationImage, github, applicationLink }) => (
                <Fragment key={id}>
                    <Nav style={{ fontSize: '2rem', textDecoration: 'none', color: 'black'}}>
                        <Nav.Item>
                            <Nav.Link href={`/application/${id}`}>{applicationTitle}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href={applicationLink} target='_blank' rel="noreferrer"><GlobalOutlined /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href={github} target='_blank' rel="noreferrer"><GithubFilled /></Nav.Link>
                        </Nav.Item>
                    </Nav>
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
                            <Card key={image} className="mx-2 bg-dark text-white">
                                <Card.Img height='200' style={{ objectFit:'cover'}} src={`https://drive.google.com/uc?export=view&id=${image}`} alt={applicationTitle}/>
                            </Card>
                        ))}
                    </Carousel>
                </Fragment>
            ))}
        </Fragment>
    );
}