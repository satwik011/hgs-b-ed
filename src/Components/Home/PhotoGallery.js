import React from 'react';
import rectangle407 from './../assets/images/Rectangle 407.png'
import rectangle408 from './../assets/images/Rectangle 408.png'
import rectangle409college from './../assets/images/Rectangle 409 (1).png'
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
    return (
        <div className='flex justify-center'>
            <div class="carousel flex mt-12 lg:ml-[150px] lg:mr-[120px] md:ml-[50px] md:mr-[50px] ml-[20px] mr-[20px]">
                <div id="slide1" class="carousel-item relative w-full">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-24 md:grid-cols-2 Carousel-image'>
                        <div className='w-100'>
                            <img className='gallery-photo' src={photo1} alt="" />
                        </div>

                        <div className='w-100'>
                            <img className='gallery-photo' src={photo2} alt="" />
                        </div>


                        <div className='w-100'>
                            <img className='gallery-photo' src={photo3} alt="" />
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform  left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn  btn-circle bg-white text-blue-400">❮</a>
                        <a href="#slide2" class="btn bg-white text-blue-400 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-24 md:grid-cols-2 Carousel-image'>
                        <div className='w-100'>
                            <img className='gallery-photo' src={photo4} alt="" />
                        </div>

                        <div className='w-100'>
                            <img className='gallery-photo' src={photo5} alt="" />
                        </div>


                        <div className='w-100'>
                            <img className='gallery-photo' src={photo6} alt="" />
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform  left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn  bg-white text-blue-400 btn-circle">❮</a>
                        <a href="#slide3" class="btn  bg-white text-blue-400 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-24 md:grid-cols-2 Carousel-image'>
                        <div className='w-100'>
                            <img className='gallery-photo' src={photo7} alt="" />
                        </div>

                        <div className='w-100'>
                            <img className='gallery-photo' src={photo8} alt="" />
                        </div>


                        <div className='w-100'>
                            <img className='gallery-photo' src={photo9} alt="" />
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform  left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn bg-white text-blue-400 btn-circle">❮</a>
                        <a href="#slide4" class="btn  bg-white text-blue-400 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-24 md:grid-cols-2 Carousel-image'>
                        <div className='w-100'>
                            <img className='gallery-photo' src={photo10} alt="" />
                        </div>

                        <div className='w-100'>
                            <img className='gallery-photo' src={photo11} alt="" />
                        </div>


                        <div className='w-100'>
                            <img className='gallery-photo' src={photo12} alt="" />
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform  left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn bg-white text-blue-400 btn-circle">❮</a>
                        <a href="#slide5" class="btn  bg-white text-blue-400 btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide5" class="carousel-item relative w-full">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-24 md:grid-cols-2 Carousel-image'>
                        <div className='w-100'>
                            <img className='gallery-photo' src={photo13} alt="" />
                        </div>

                        <div className='w-100'>
                            <img className='gallery-photo' src={photo14} alt="" />
                        </div>


                        <div className='w-100'>
                            <img className='gallery-photo' src={photo15} alt="" />
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform  left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn bg-white text-blue-400 btn-circle">❮</a>
                        <a href="#slide1" class="btn  bg-white text-blue-400 btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;