import React, { useEffect } from 'react';
import { FaCalendarCheck, FaComment, FaHeadphones, FaPalette, } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Provides = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div class="section pt-3 pt-lg-5 px-2 px-lg-4" id="about">
<div class="container-narrow">
<div class="text-center mb-4">
<h2 class="marker marker-center">Work With Us</h2>
</div>
{/* <div class="text-center">
<p class="mx-auto mb-3">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
</div> */}
</div>
<div class="container">
<div class="row py-3">
<div class="col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="100">
<div class="border rounded p-3 bg-light mb-3">
<div class="text-center text-secondary display-3"><FaPalette/></div>
<h3 class="h4 mt-2">Design</h3>
<p class="text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores..</p>
</div>
</div>
<div class="col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="200">
<div class="border rounded p-3 bg-light mb-3">
<div class="text-center text-secondary display-3"><FaComment/></div>
<h3 class="h4 mt-2">Feedback</h3>
<p class="text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores..</p>
</div>
</div>
<div class="col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="300">
<div class="border rounded p-3 bg-light mb-3">
<div class="text-center text-secondary display-3"><FaCalendarCheck/></div>
<h3 class="h4 mt-2">Execution</h3>
<p class="text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores..</p>
</div>
</div>
<div class="col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="400">
<div class="border rounded p-3 bg-light mb-3">
<div class="text-center text-secondary display-3"><FaHeadphones/></div>
<h3 class="h4 mt-2">Support</h3>
<p class="text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores..</p>
</div>
</div>
</div>
</div>
</div>
    );
};

export default Provides;