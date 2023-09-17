import React from 'react';
import CountUp from 'react-countup';
import { FaClipboardCheck, FaClock, FaFile, FaSmile } from 'react-icons/fa';

const Coprogress = () => {
    return (
        <div>
            <div class="section bg-dark text-light py-3 py-lg-5 px-2 px-lg-4" id="stats">
<div class="container">
<div class="row p-4">
<div class="col-md-3 col-sm-6">
<div class="d-flex py-2">
    <FaClipboardCheck className='fs-1'/>
<div class="ms-1">
<div class="h2 mb-1"><CountUp end={325} />
</div>
<div class="h6">Projects Done</div>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6">
<div class="d-flex py-2"><FaSmile className='fs-1'/>
<div class="ms-1">
<div class="h2 mb-1"><CountUp end={145} /></div>
<div class="h6">Happy Clients</div>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6">
<div class="d-flex py-2">
    <FaFile className='fs-1'/>
<div class="ms-1">
<div class="h2 mb-1"><CountUp end={464} /></div>
<div class="h6">Appreciations</div>
</div>
</div>
</div>
<div class="col-md-3 col-sm-6">
<div class="d-flex py-2"><FaClock className="fs-1"/>
<div class="ms-1"> 
<div class="h2 mb-1"><CountUp end={8565} /></div>
<div class="h6">Support Hours</div>
</div>
</div>
</div>
</div>
</div>
</div>
        </div>
    );
};

export default Coprogress;