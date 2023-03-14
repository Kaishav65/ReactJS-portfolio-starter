import React from 'react'
import "./Portfolio.css"
import {Swiper, SwiperSlide} from "swiper/react"
import Sidebar from  "../../img/sidebar.png";
import Econmmerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png"
import 'swiper/css'

const Portfolio = () => {
  return (
    <div className='portfolio'>
    {/* heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

       {/* Swiper  */}
       <Swiper
       className='portfolio-slider'
       spaceBetween={80}
       slidesPerView={3}
       grabCursor = {true}>
        <SwiperSlide>
            <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Econmmerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={MusicApp} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
            <img src={HOC} alt="" />
        </SwiperSlide>
        
       </Swiper>
    </div>
  )
}

export default Portfolio