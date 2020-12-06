import React, {useState} from 'react';
import '../styles/Carousel.scss';

function Carousel(){
    let sliderArr = [1,2,3,4,5];
    const [x,setX] = useState(0);
    const left=()=>{
        console.log(x);
        setX(x+100);
    };
    const right=()=>{
        setX(x-100);
    };
    return(
        <div className="slider"> 
        {
            sliderArr.map((item,index)=>{
                return(
                    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })
        }
        <button id="left" onClick={left}>left</button>
        <button id="right" onClick={right}>right</button>
        </div>
    );
}

export default Carousel;

