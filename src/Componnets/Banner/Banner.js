import React, { useEffect } from 'react';
import "./Banner.css"
import banner_img from "../../assest/building_websites.svg"
import { FaArrowRight, FaBeer, FaPlayCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className="container-fluid bg-light">

      
        <div className="container px-2">
        <div className="row">
        <div className="col-lg-6">
        <div className="mt-5 pt-lg-5">
        <h1 className="intro-title marker" data-aos="fade-left" data-aos-delay="50">Your Success is Our Mission. </h1>
        <p className="lead fw-normal mt-4" data-aos="fade-up" data-aos-delay="100" >Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.</p>
        <div className="mt-3" data-aos="fade-up" data-aos-delay="100"><a className="btn btn-primary shadow-sm mt-1 me-2" href="#contact">Get Sarted <FaArrowRight/> </a><a className="btn btn-outline-secondary mt-1" data-bigpicture="{&quot;ytSrc&quot;: &quot;aqz-KE-bpKQ&quot;}" href="#"><FaPlayCircle/> Watch Video</a></div>
        </div>
        </div>
        <div className="col-lg-6 p-3 pe-lg-0" data-aos="fade-left" data-aos-delay="100"><img className="pt-2 img-fluid" src={banner_img} alt="hello" /></div>
        </div>
        </div>
     
        <div className="wave-bg"></div>
        </div>
    );
};

export default Banner;