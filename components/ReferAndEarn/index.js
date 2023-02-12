import React from 'react'
import { Card, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import Button from "react-bootstrap/Button";


function CustomNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={`${className}`}
            onClick={onClick}
        ></div>
    );
}

function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        />
    );
}

const ReferAndEarn = () => {
    const settings = {
        dots: false,
        // infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    variableWidth : true
                }
            },
        ]
    };

    return (
        <div className='refer-earn mx-2 mx-md-4 mx-lg-5'>
        <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6].map(() =>
                        <Card
                            className="border-0 rounded-3 card refer-earn-img">
                            <a href="#" >
                                <img className='rounded-3 w-100 h-100'
                                    alt="Best home salon services in Lucknow"
                                    src="https://www.glamcode.in/user-uploads/service/253/12541ee64dc3df644d1a41853b4f4f7c.png.webp" />
                            </a>
                        </Card>
            )}
        </Slider>
        </div>
    )
}

export default ReferAndEarn