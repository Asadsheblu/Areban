import React, { useEffect } from 'react';
import img from "../../assest/creative-team.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProgressBar from '@ramonak/react-progress-bar';
import "./Workresult.css"
const WorkResult = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className='container'>

     
        <div class="row py-3 py-lg-5">
<div class="col-lg-6 col-md-5 px-3" data-aos="fade-zoom-in" data-aos-delay="50" data-aos-easing="ease-in-back">
    <img class="my-3 img-fluid" src={img} alt="creative-team" />
    </div>
<div class="col-lg-6 col-md-7 px-2" data-aos="zoom-in" data-aos-delay="100">
<div class="h3 mb-2">Our <strong>Expert Team</strong> delivers the best result.</div>
<p class="text-secondary mb-2">Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.</p>

<p>
    <span>Web Design</span>
<ProgressBar  completed={90} />
</p>
<p>
    <span>UX/UI Design</span>
<ProgressBar completed={80} />
</p>
<p>
    <span>Graphics Design</span>
<ProgressBar completed={70} />
</p>
<p>
    <span>Digital Marketing</span>
<ProgressBar completed={74} />
</p>

</div>
</div>
</div>
    );
};

export default WorkResult;