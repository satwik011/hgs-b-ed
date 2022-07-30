import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import photoGalleryLine from './../assets/images/photo-gallery-line.png'; 
import photo1 from './../assets/images/1.JPG';
import photo2 from './../assets/images/2.jpeg';
import photo3 from './../assets/images/3.JPG';
import photo4 from './../assets/images/4.jpg';
import photo5 from './../assets/images/5.JPG';
import photo6 from './../assets/images/6.jpg';
import photo7 from './../assets/images/7.jpg';
import photo8 from './../assets/images/8.jpg';
import photo9 from './../assets/images/9.JPG';
import photo10 from './../assets/images/10.jpg';
import photo11 from './../assets/images/11.jpg';
import photo12 from './../assets/images/12.jpg';
import photo13 from './../assets/images/13.jpg';
import photo14 from './../assets/images/14.JPG';
import photo15 from './../assets/images/15.JPG';

const PhotoGallery = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className='mr-[30px] ml-[80px]'>
            <div className=''>
                <div className='flex justify-center my-8'>
                <div>
                    <h1 className='text-4xl photoGallery-heading'>Photo Gallery</h1>
                    <img src={photoGalleryLine} alt="" />
                </div>
                </div>
                <Slider {...settings}>
                    <div className=''>
                        <img className='gallery-photo' src={photo1} alt="" />
                    </div>
                    <div className=''>
                        <img className='gallery-photo' src={photo2} alt="" />
                    </div>
                    <div className=''>
                        <img className='gallery-photo' src={photo3} alt="" />
                    </div>
                    <div className=''>
                        <img className='gallery-photo' src={photo4} alt="" />
                    </div>
                    <div className=''>
                        <img className='gallery-photo' src={photo5} alt="" />
                    </div>
                    <div className=''>
                        <img className='gallery-photo' src={photo6} alt="" />
                    </div>
                    <div className=''>
                        <img className='gallery-photo' src={photo7} alt="" />
                    </div>
                    <div className=''>
                        <img className='gallery-photo' src={photo8} alt="" />
                    </div>
                    <div className=''>
                        <img className='gallery-photo' src={photo9} alt="" />
                    </div>
                    <div className=''>
                        <img className='gallery-photo' src={photo10} alt="" />
                    </div>
                    <div className=''>
                        <img className='gallery-photo' src={photo11} alt="" />
                    </div>
                    <div className=''>
                        <img className='gallery-photo' src={photo12} alt="" />
                    </div>
                    <div className=''>
                        <img className='gallery-photo' src={photo13} alt="" />
                    </div>
                    <div className=''>
                        <img className='gallery-photo' src={photo14} alt="" />
                    </div>
                    <div className=''>
                        <img className='gallery-photo' src={photo15} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default PhotoGallery;