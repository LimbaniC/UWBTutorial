import './App.css';
/* Import components here in this pattern: */
import Template from './Template'; //this is only an example that is for reference only. Delete this line when you are done with this example.
//See Template.js for more information on how to create your own component.
import UBNav from './UBNav.js';
import UBHero from './UBHero.js';
import UBWhiteSection from './UBWhiteSection.js';
import UBDevelopment from './UBDevelopment.js';
import UBBenefits from './UBBenefits.js';
import UBTestimonials from './UBTestimonials.js';
import UBApply from './UBApply.js'

import logo from './images/upward-bound-big-logo.png';
import student1 from './images/student1.png';
import './css/styles.css'
import sitetext from './text/sitetext.json'
import { useState } from "react"

function App() {
  const [curSection, setSection] = useState("home")
  return (
    <>
      <UBNav id="nav" text={sitetext.nav} curSection={curSection}/>
      <UBHero id="home" text={sitetext.home} setSection={setSection}/>
      {/*
        <div className="redbg">
          <img src={logo} alt="Upward Bound Logo" style={{ filter: 'drop-shadow(0px 0px 0px #000)', padding: '20px', float: 'left' }} />
          <nav className="navbar">
            <ul>
              <li className='navbar__li'><a className='navbar__a' href="#home">Home</a></li>
              <li className='navbar__li'><a className='navbar__a' href="#about">About</a></li>
              <li className='navbar__li'><a className='navbar__a' href="#benefits">Benefits</a></li>
              <li className='navbar__li'><a className='navbar__a' href="#development">Development</a></li>
              <li className='navbar__li'><a className='navbar__a' href="#expectations">Expectations</a></li>
              <li className='navbar__li'><a className='navbar__a' href="#testimonials">Testimonials</a></li>
              <li className='navbar__li'><a className='navbar__a' href="#apply">Apply</a></li>
            </ul>
          </nav>
          <div style={{ clear: 'both', position: 'relative', top: '-50px' }}>
            <img src={student1} alt="Student" style={{ filter: 'drop-shadow(0px 0px 3px #000)', float: 'left', scale: '0.75'}}/>
          </div>
          <div style={{position: 'relative', top: '-50px' }}>
            <h2 className="upward-bound-tagline">Enrich your learning with Upward Bound</h2>
          </div>
          <div style={{position: 'relative', top: '-50px' }}>
            <p className='upward-bound-desc'>Upward Bound program is a year-round, federally sponsored, educational program serving high school students from Springfield's High School of Commerce.</p>
          </div>
        </div>
      */}
      <UBWhiteSection id="about" text={sitetext.about} setSection={setSection}/>
      <UBBenefits id="benefits" text={sitetext.benefits} setSection={setSection}/>
      <UBDevelopment id="development" text={sitetext.development} setSection={setSection}/>
      <div className="redbg" id="expectations"> 
        {/* Expectations */}
      </div>
      <UBTestimonials id="testimonials" text={sitetext.testimonials} setSection={setSection}/>
      <UBApply id="apply" text={sitetext.apply} setSection={setSection}/>
      <div className="redbg" id="contact"> 
        {/* Contact */}
      </div>
    </>
  );
}

export default App;
