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
import UBLatest from './UBLatest.js'

import './css/styles.css'
import sitetext from './text/sitetext.json'
import { useState } from "react"

function App() {
  const [curSection, setSection] = useState("home")
  return (
    <body scroll="no" style={{overflow: 'hidden'}}>
      <UBNav id="nav" text={sitetext.nav} curSection={curSection}/>
      <UBHero id="home" text={sitetext.home} setSection={setSection}/>
      <UBWhiteSection id="about" text={sitetext.about} setSection={setSection}/>
      <UBBenefits id="benefits" text={sitetext.benefits} setSection={setSection}/>
      <UBDevelopment id="development" text={sitetext.development} setSection={setSection}/>
      <UBLatest id = "latest" text = {sitetext.latest} setSection = {setSection}/>
      <UBTestimonials id="testimonials" text={sitetext.testimonials} setSection={setSection}/>
      <UBApply id="apply" text={sitetext.apply} setSection={setSection}/>
      <div className="redbg" id="contact"> 
        {/* Contact should have a redsec class. Import in the following format below:
        <UBContact id="contact" text={sitetext.contact} setSection={setSection}/>
        Delete the enclosing div when you are done.
        */}
      </div>
    </body>
  );
}

export default App;
