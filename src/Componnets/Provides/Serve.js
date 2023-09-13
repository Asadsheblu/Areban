import React, { useEffect } from 'react';
import development from "../../assest/development.svg"
import { FaCheck } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Serve = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div class="container">
        <div class="row py-3 py-lg-5">
        <div class="col-lg-6 col-md-5 px-3 order-md-last" data-aos="fade-zoom-in" data-aos-delay="50" data-aos-easing="ease-in-back"><img class="my-3 img-fluid" src={development} alt="development" /></div>
        <div class="col-lg-6 col-md-7 px-2" data-aos="zoom-in" data-aos-delay="100">
        <div class="h3 mb-2">Let our <strong>Agile Team</strong> understand and serve your needs.</div>
        <p class=" mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula auctor ornare. Nulla non ullamcorper tellus. Vestibulum pulvinar eros nec tortor maximus, iaculis rutrum nibh mollis.</p>
        <div class="row">
        <div class="col-lg-6 mb-2">
        <div class="border border-3 rounded px-2 py-2 d-flex align-items-center">
        <div class="badge bg-success me-2"><FaCheck/></div>
        <div class=" fw-bold">Active Colloboration</div>
        </div>
        </div>
        <div class="col-lg-6 mb-2">
        <div class="border border-3 rounded px-2 py-2 d-flex align-items-center">
        <div class="badge bg-success me-2"><FaCheck/></div>
        <div class=" fw-bold">On-Schedule Delivery</div>
        </div>
        </div>
        <div class="col-lg-6 mb-2">
        <div class="border border-3 rounded px-2 py-2 d-flex align-items-center">
        <div class="badge bg-success me-2"><FaCheck/></div>
        <div class=" fw-bold">After Sales Services</div>
        </div>
        </div>
        <div class="col-lg-6 mb-2">
        <div class="border border-3 rounded px-2 py-2 d-flex align-items-center">
        <div class="badge bg-success me-2"><FaCheck/></div>
        <div class="fw-bold">24x7 On-Support</div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Serve;