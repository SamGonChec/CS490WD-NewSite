import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'

function Slider() {
    return (
        <Carousel 
            showArrows={true} 
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
        >
            <div className='doctor-img'>
            <img alt="" src="/images/img-5.jpg" />
            <p className="legend">Doctor 1</p>
            </div>
            <div className='doctor-img'>
            <img alt="" src="/images/img-5.jpg" />
            <p className="legend">Doctor 2</p>
            </div>
            <div className='doctor-img'>
            <img alt="" src="/images/img-5.jpg" />
            <p className="legend">Doctor 3</p>
            </div>
            <div className='doctor-img'>
            <img alt="" src="/images/img-5.jpg" />
            <p className="legend">Doctor 4</p>
            </div>
            <div className='doctor-img'>
            <img alt="" src="/images/img-5.jpg" />
            <p className="legend">Doctor 5</p>
            </div>
        </Carousel>
    )
}

export default Slider

