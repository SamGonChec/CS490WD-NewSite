import React from 'react';
import './Button.css'
import {Link} from 'react-router-dom';

const STYLES = ['button--primary', 'button--secondary'];
const SIZES = ['button--small', 'button--medium', 'button--large'];

export const Button = ({children, type, onClick, styleButton, sizeButton})
=>{
    const checkButtonStyle = STYLES.includes(styleButton) ? styleButton : STYLES[0];
    const checkButtonSize = SIZES.includes(sizeButton) ? sizeButton : STYLE[0];

    return(
        <Link to={path} className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
};