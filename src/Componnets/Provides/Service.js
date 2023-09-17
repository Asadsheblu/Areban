import React from 'react';
import web from "../../assest/web-design.svg"
import graphics from "../../assest/graphic-design.svg"
import ux from "../../assest/ui-ux.svg"
import digital from "../../assest/download.png"
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
const Service = () => {
    return (
        <div className='container-fluid'>
            <div className="section bg-light py-3 py-lg-5 px-2 px-lg-4" id="services">
<div className="container">
<div className="text-center mb-5">
<h2 className="marker marker-center">Our Services</h2>
</div>
<div className="text-center">
<p className="mx-auto mb-3">Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p>
</div>
<div className="row py-3">
<div className="col-md-3 text-center mb-3" data-aos="fade-up" data-aos-delay="100">
<div className="bg-white border rounded-circle d-inline-block p-2">
    <img className="p-2" src={web} width={90} height={90} alt="web design" />
    </div>
<div className="bg-white border rounded p-3 mt-n4">
<div className="h5 mt-3">Web Design</div>
<p className="text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Link className="text-decoration-none" to="/">Learn More <FaArrowRight/> </Link>
</div>
</div>
<div className="col-md-3 text-center mb-3" data-aos="fade-up" data-aos-delay="200">
<div className="bg-white border rounded-circle d-inline-block p-2">
    <img className="p-2" src={graphics} width={90} height={90}  alt="graphic design" />
    </div>
<div className="bg-white border rounded p-3 mt-n4">
<div className="h5 mt-3">Graphic Design</div>
<p className="text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Link className="text-decoration-none" to="/">Learn More <FaArrowRight/></Link>
</div>
</div>
<div className="col-md-3 text-center mb-3" data-aos="fade-up" data-aos-delay="300">
<div className="bg-white border rounded-circle d-inline-block p-2">
    <img className="p-2" src={ux} width={90} height={90}  alt="ui-ux" />
    </div>
<div className="bg-white border rounded p-3 mt-n4">
<div className="h5 mt-3">UI/UX</div>
<p className="text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Link className="text-decoration-none" to="/">Learn More <FaArrowRight/></Link>
</div>
</div>
<div className="col-md-3 text-center mb-3" data-aos="fade-up" data-aos-delay="300">
<div className="bg-white border rounded-circle d-inline-block p-2">
    <img className="p-2" src={digital} width={90} height={90}  alt="ui-ux" />
    </div>
<div className="bg-white border rounded p-3 mt-n4">
<div className="h5 mt-3">UI/UX</div>
<p className="text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Link className="text-decoration-none" to="/">Learn More <FaArrowRight/></Link>
</div>
</div>
</div>
</div>
</div>
        </div>
    );
};

export default Service;