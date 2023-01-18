import './App.css';
import logo from './images/upward-bound-big-logo.png';
import student1 from './images/student1.png';

function App() {
  return (
    <>
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
      <div className="graybg" id="about"> 
        {/* About section goes inside this div, so on and so forth */}
      </div> 
      <div className="redbg" id="benefits"> 
        {/* Benefits */}
      </div> 
      <div className="graybg" id="development"> 
        {/* Development */}
      </div> 
      <div className="redbg" id="expectations"> 
        {/* Expectations */}
      </div> 
      <div className="graybg" id="testimonials"> 
        {/* Testimonials */}
      </div>
      <div className="graybg" id="apply"> 
        {/* Apply */}
      </div> 
      <div className="redbg" id="contact"> 
        {/* Contact */}
      </div>
    </>
  );
}

export default App;
