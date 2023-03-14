import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Profile1 from "../../img/profile1.jpg";
import Profile2 from "../../img/profile2.jpg";
import Profile3 from "../../img/profile3.jpg";
import Profile4 from "../../img/profile4.jpg";
import Profile5 from "../../img/profile5.jpg";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonials = () => {
  const clients = [
    {
      img: Profile1,
      review:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit in liber id el isolation ifso   in liber iso lorem Ipsum dolor sit amet, consectetur adipiscing elit in liber id el isolation ifso   in liber iso lorem Ipsum dolor sit amet, consectetur adipiscing elit in liber id el isolation ifso   in liber iso  ",
    },
    {
      img: Profile2,
      review:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit in liber id el isolation ifso   in liber iso lorem Ipsum dolor sit amet, consectetur adipiscing elit in liber id el isolation ifso   in liber iso  lorem Ipsum dolor sit amet, consectetur kis doa is osn osin o us ousj i osins suggested implements",
    },
    {
      img: Profile3,
      review:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit in liber id el isolation ifso   in liber iso lorem Ipsum dolor sit amet, consectetur adipiscing elit in liber id el isolation ifso   in liber iso lorem Ipsum dolor sit amet, consectetur adipiscing elit in liber id el isolation ifso   in liber iso  ",
    },
    {
      img: Profile4,
      review:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit in liber id el isolation ifso   in liber iso lorem Ipsum dolor sit amet, consectetur adipiscing elit in liber id el isolation ifso   in liber iso lorem Ipsum dolor sit amet, consectetur adipiscing elit in liber id el isolation ifso   in liber iso  ",
    },
    {
      img: Profile5,
      review:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit in liber id el isolation ifso   in liber iso lorem Ipsum dolor sit amet, consectetur adipiscing elit in liber id el isolation ifso   in liber iso lorem Ipsum dolor sit amet, consectetur adipiscing elit in liber id el isolation ifso   i zn liber iso  ",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get</span>
        <span style={{color: "var(--orange)"}}> Exceptional Work</span>
        <span> from me ....</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur t-blur2"
          style={{ background: "var(--skyblue)"}}
        ></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((clients, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={clients.img} alt="" />
                <span>{clients.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
