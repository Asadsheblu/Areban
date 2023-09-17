import React from 'react';
import { FaBehance, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer class="py-5 px-2 bg-light" id="footer">
<div class="container">
<div class="row">
<div class="col-lg-4 col-md-12 mb-3">
<div class="mb-3">
<div class="h4">Super Agency</div>
<p class="text-muted">Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
<div class="social-nav">
<nav role="navigation">
<ul class="nav text-light">
<li class="nav-item"><a class="nav-link" href="https://twitter.com/" title="Twitter"><FaTwitter className='fs-4'/></a></li>
<li class="nav-item"><a class="nav-link" href="https://www.facebook.com/" title="Facebook"><FaFacebook className='fs-4'/></a></li>
<li class="nav-item"><a class="nav-link" href="https://www.instagram.com/" title="Instagram"><FaInstagram className='fs-4'/></a></li>
<li class="nav-item"><a class="nav-link" href="https://www.linkedin.com/" title="LinkedIn"><FaLinkedin className='fs-4'/></a></li>
<li class="nav-item"><a class="nav-link" href="https://www.behance.net/" title="Behance"><FaBehance className='fs-4'/></a></li>
</ul>
</nav>
</div>
</div>
<div class="text-small text-muted">
<div class="mb-1">&copy; Copyright <strong>Agency</strong>. All rights reserved.</div>
<div>
Design by <a href='/' target="_blank">Areban</a></div>
</div>
</div>
<div class="col-lg-2 col-md-6 mb-3">
<div class="text-uppercase mb-2">Services</div>
<div class="nav flex-column"><a class="nav-link px-0" href="#!">Design</a><a class="nav-link px-0" href="#!">Development</a><a class="nav-link px-0" href="#!">Branding</a><a class="nav-link px-0" href="#!">Marketing</a></div>
</div>
<div class="col-lg-2 col-md-6 mb-3">
<div class="text-uppercase mb-2">Products</div>
<div class="nav flex-column"><a class="nav-link px-0" href="#!">Services</a><a class="nav-link px-0" href="#!">Portfolio</a><a class="nav-link px-0" href="#!">Team</a><a class="nav-link px-0" href="#!">Pricing</a></div>
</div>
<div class="col-lg-2 col-md-6 mb-3">
<div class="text-uppercase mb-2">About</div>
<div class="nav flex-column"><a class="nav-link px-0" href="#!">About</a><a class="nav-link px-0" href="#!">Contact</a><a class="nav-link px-0" href="#!">Terms</a><a class="nav-link px-0" href="#!">Privacy</a></div>
</div>
<div class="col-lg-2 col-md-6 mb-3">
<div class="text-uppercase mb-2">Contact Us</div>
<div class="text-small">
<address>
568, Hill Road<br/>
New York, NY 50032<br/>
United States
</address>
<div class="mb-1"><strong>Phone:</strong><br/>+0718-111-0011</div>
<div class="mb-1"><strong>Email:</strong><br/><a >areban@gmail.com</a></div>
</div>
</div>
</div>
</div>
</footer>
    );
};

export default Footer;