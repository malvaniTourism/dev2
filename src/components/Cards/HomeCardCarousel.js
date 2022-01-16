import React from "react";
import Slider from "react-slick";
import UpcomingToursCard from "./UpcomingToursCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OffersCard from "./OffersCard";

var cards = [
    {
        "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
        "title": "Burgundy Flemming",
        "subtitle": "Advertising"
    },
    {
        "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
        "title": "Nigel Nigel",
        "subtitle": "Sound & Vision"
    },
    {
        "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
        "title": "Caspian Bellevedere",
        "subtitle": "Accounting"
    }
];

const HomeCardCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{width: '30%', height: '90vh', backgroundColor: 'blue', position: 'relative'}}>

            </div>
            <div style={{position: 'absolute', width: '73%', left: '25%'}}>
                <Slider {...settings}>
                    <OffersCard />
                    <OffersCard />
                    <OffersCard />
                    <OffersCard />
                </Slider>
            </div>
        </div>
    );
}

export default HomeCardCarousel;