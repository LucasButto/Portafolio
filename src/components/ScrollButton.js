import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../styles/ScrollButton.css'

const ScrollButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
  return (
    <>
      <button onClick={scrollToTop} className="scroll-button" data-aos="fade-up" data-aos-duration="500"> 
        <KeyboardArrowUpIcon className="arrow1"/>
        <KeyboardArrowUpIcon className="arrow2"/>
      </button>
    </>
  )
}

export default ScrollButton
