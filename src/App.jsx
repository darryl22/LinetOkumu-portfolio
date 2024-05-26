import React from 'react'
import './App.css'
import management from './assets/management.png'
import Accordion from './components/Accordion'
import hultprize from './assets/hult-prize.png'
import impactplayers from "./assets/impact-players-book.jpg"
import multipliersbook from './assets/multipliers-book.jpg'
import rightkindbook from './assets/right-kind-book.jpg'
import menu from './assets/menu.png'
import close from './assets/close.png'
import harvardlogo from './assets/harvardbusiness-school.png'
import hultlogo from './assets/hultbusinessschool.jpg'
import leicterlogo from './assets/universityofleicter.png'
import harvardonline from './assets/harvardbusiness-schoolonline.png'
import ecu from './assets/ecu-australia.png'
import cipd from './assets/cipd.png'
import iata from './assets/iata.png'
import maseno from './assets/maseno.png'


function App() {

  const [menuOpen, setMenuOpen] = React.useState(false)

  function toggleMenu() {
    setMenuOpen(prev => {
      return !prev
    })
  }

  const leftContentStyle = {
    // transform: menuOpen ? "scaleX(1)" : "scaleX(0)"
    width: menuOpen ? "80vw" : "0vw"
  }

  return (
    <div className='main-content-div'>
      <img src={menu} alt="menu-icon" className='menu-icon' onClick={toggleMenu}/>

      <div className="left-content-div">
        <div className="profile-image"></div>
        <h2 style={{fontFamily: "'Playfair Display SC', serif", fontSize: "2em", marginBottom: "0em"}}>Linet Okumu</h2>
        <p><span style={{color: "#2c98f0"}}>TRAINING MANAGER</span> IN THE UAE</p>
        <div className="nav-links-div">
          <a href="#about" className="nav-links">ABOUT</a>
          <a href="#skills" className="nav-links">EXPERTISE</a>
          <a href="#education" className="nav-links">EDUCATION</a>
          <a href="#experience" className="nav-links">EXPERIENCE</a>
          <a href="#volunteerwork" className="nav-links">VOLUNTEER WORK</a>
          <a href="#currentreads" className="nav-links">CURRENT READS</a>
        </div>
      </div>

      <div className="left-content-div2" style={leftContentStyle}>
        <img src={close} alt="close-menu" className='close-menu' onClick={toggleMenu}/>
        <div className="profile-image"></div>
        <h2 style={{fontFamily: "'Playfair Display SC', serif", fontSize: "2em", marginBottom: "0em"}}>Linet Okumu</h2>
        <p><span style={{color: "#2c98f0"}}>TRAINING MANAGER</span> IN THE UAE</p>
        <div className="nav-links-div">
          <a href="#about" className="nav-links" onClick={() => setMenuOpen(false)}>ABOUT</a>
          <a href="#skills" className="nav-links" onClick={() => setMenuOpen(false)}>EXPERTISE</a>
          <a href="#education" className="nav-links" onClick={() => setMenuOpen(false)}>EDUCATION</a>
          <a href="#experience" className="nav-links" onClick={() => setMenuOpen(false)}>EXPERIENCE</a>
          <a href="#volunteerwork" className="nav-links" onClick={() => setMenuOpen(false)}>VOLUNTEER WORK</a>
          <a href="#currentreads" className="nav-links" onClick={() => setMenuOpen(false)}>CURRENT READS</a>
        </div>
      </div>
      
      <div className="right-content-div">
        <div className="right-content-header">
          <h1 style={{fontSize: "3em", fontFamily: "'Playfair Display SC', serif"}}>Hi!<br/> I'm Linet Okumu.</h1>
          <button className='right-content-button'>DOWNLOAD CV</button>
        </div>
        <div style={{margin: "0px 2em"}}>
          <p style={{fontSize: "0.9em", marginBottom: "1em", color: "rgba(0, 0, 0, 0.6)"}} id='about'>ABOUT</p>
          <p style={{fontSize: "1.2em", marginBottom: "3em"}}>WHO AM I</p>
          <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)"}}>
            Linet is a Kenyan citizen with over 21 years of experience in the Aviation industry, having resided 
            in Dubai since 2003. An Aviation enthusiast with -depth experience and passion in Leadership, Learning 
            and development and Talent Management.
          </p>
          <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)"}}>
            Linet started her career in 2002 with Barclays Bank Kenya and soon after moved to Emirates Airline in 2003. Linet 
            holds an EMBA from HULT International Business School where she received the Growth Mindset Award 2021 and Dean's 
            list academic achievement in spring 2021 and holds qualifications from other renowned institutions.
          </p>
          <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)"}}>
            Linet is always paying forward through her societal charitable work and by conducting free career coaching and 
            mentoring to family, friends, colleagues, and students. She is inspired to make a positive impact on the future of 
            work. She has received many Awards and Honors for her professional and volunteer work.
          </p>
          <div className="expertise-div" style={{marginBottom: "6em", marginTop: "3em"}} id='skills'>
            <div className="expertise" style={{borderBottom: "2px solid blue"}}>
              <img src={management} alt="management" style={{height: "2.5em"}}/>
              <p style={{fontWeight: "bold"}}>Leadership and management essentials</p>
            </div>
            <div className="expertise" style={{borderBottom: "2px solid green"}}>
              <img src={management} alt="management" style={{height: "2.5em"}}/>
              <p style={{fontWeight: "bold"}}>High potential leaders</p>
            </div>
          </div>
          <div className="parallax">
            <p>Over 20 years of experience</p>
          </div>
          <p style={{fontSize: "0.9em", marginBottom: "1em", color: "rgba(0, 0, 0, 0.6)"}} id='education'>EDUCATION AND CERTIFICATIONS</p>
          <p style={{fontSize: "1.2em", marginBottom: "3em"}}>EDUCATION</p>

          <div className="education" style={{marginBottom: "6em"}}>
            <Accordion textContent="Developing yourself as a leader. January - April 2024" title="Harvard Business School Executive Education" image={harvardlogo}/>
            <Accordion textContent="Executive MBA 2019 - 2021" title="HULT International Business School" image={hultlogo}/>
            <Accordion textContent="Masters: Post graduate diploma in Business Administration 2008 - 2013" title="University of Leicester - UK" image={leicterlogo}/>
            <Accordion textContent="Becoming a better manager - Management Essentials 2018" title="Harvard Business School Online" image={harvardonline}/>
            <Accordion textContent="University Diploma in Aviation Security Management 2006 - 2007. Distinction" title="Edith Cowan University" image={ecu}/>
            <Accordion textContent="CIPD 2014 - 2025" title="Chartered Institute of Personnel and Development Practice" image={cipd}/>
            <Accordion textContent="Leadership and management diploma 2014 - 2015, Diploma in Airline studies 2003 - 2005. Distinction" title="IATA Training" image={iata}/>
            <Accordion textContent="Degree: Bachelor of arts 1998 - 2002. 2nd Class Honours Upper Division" title="Maseno University - Kenya" image={maseno}/>
          </div>

          <p style={{fontSize: "0.9em", marginBottom: "1em", color: "rgba(0, 0, 0, 0.6)"}} id='experience'>WORK EXPERIENCE</p>
          <p style={{fontSize: "1.2em", marginBottom: "3em"}}>WORK EXPERIENCE</p>

          <div className="timeline" style={{marginBottom: "4em"}}>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h2 style={{marginTop: "10px", marginBottom: "10px"}}>Training Manager</h2>
                  <p style={{marginTop: "0px", color: "gray"}}>EMIRATES</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint dignissimos doloremque? Natus soluta voluptatum, mollitia possimus expedita deserunt iste.</p>
              </div>
            </div>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h2 style={{marginTop: "10px", marginBottom: "10px"}}>Training Specialist</h2>
                  <p style={{marginTop: "0px", color: "gray"}}>EMIRATES</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint dignissimos doloremque? Natus soluta voluptatum, mollitia possimus expedita deserunt iste.</p>
              </div>
            </div>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h2 style={{marginTop: "10px", marginBottom: "10px"}}>Training Officer</h2>
                  <p style={{marginTop: "0px", color: "gray"}}>EMIRATES</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint dignissimos doloremque? Natus soluta voluptatum, mollitia possimus expedita deserunt iste.</p>
              </div>
            </div>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h2 style={{marginTop: "10px", marginBottom: "10px"}}>Crew Trainer</h2>
                  <p style={{marginTop: "0px", color: "gray"}}>EMIRATES</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint dignissimos doloremque? Natus soluta voluptatum, mollitia possimus expedita deserunt iste.</p>
              </div>
            </div>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h2 style={{marginTop: "10px", marginBottom: "10px"}}>Service Delivery - Inflight Services</h2>
                  <p style={{marginTop: "0px", color: "gray"}}>EMIRATES</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint dignissimos doloremque? Natus soluta voluptatum, mollitia possimus expedita deserunt iste.</p>
              </div>
            </div>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h2 style={{marginTop: "10px", marginBottom: "10px"}}>Part Time Local Tutor</h2>
                  <p style={{marginTop: "0px", color: "gray"}}>EDITH COWAN UNIVERSITY</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint dignissimos doloremque? Natus soluta voluptatum, mollitia possimus expedita deserunt iste.</p>
              </div>
            </div>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h2 style={{marginTop: "10px", marginBottom: "10px"}}>Management Trainee Programme</h2>
                  <p style={{marginTop: "0px", color: "gray"}}>BARCLAYS BANK</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint dignissimos doloremque? Natus soluta voluptatum, mollitia possimus expedita deserunt iste.</p>
              </div>
            </div>
          </div>

          <p style={{fontSize: "0.9em", marginBottom: "3em", color: "rgba(0, 0, 0, 0.6)"}} id='volunteerwork'>VOLUNTEER WORK</p>
          <p style={{fontSize: "1.2em", marginBottom: "0em"}}>HULT Prize 2022</p>
          <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)", marginBottom: "2em"}}>
            Nomination by my University Alumna to serve as Judge at the 2022 Hult-Prize On-Campus competition. An annual competition that supports and encourages creative ideas from university level students globally who are challenged to solve a pressing social issue. The Prize won ($1,000,000) is a partnership between Hult International Business School and the United Nations foundation.
          </p>
          <img src={hultprize} alt="hultprize" style={{width: "60%", marginBottom: "2em"}}/>
          <p style={{fontSize: "1.2em", marginBottom: "0em"}}>Peer Support Services for Flight and Cabin crew 2008 - 2024</p>
          <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)"}}>
          A trained Mental Health First Aider and Peer Supporter. Provided emotional support to Flight and Cabin Crew following critical incidents.
          </p>

          <p style={{fontSize: "0.9em", marginBottom: "0em", color: "rgba(0, 0, 0, 0.6)", marginTop: "5em"}} id='currentreads'>CURRENT READS</p>
          <p style={{fontSize: "1.2em", marginBottom: "3em"}}>CURRENT READS</p>
          <div className="current-reads-div">
            <div className="current-reads">
              <img src={impactplayers} alt="impactplayers" style={{width: "100%", display: "block"}}/>
              <div className="books-overlay">
                <p style={{margin: "10px"}}>In Impact Players, New York Times bestselling author and researcher Liz Wiseman reveals the secrets of these stellar professionals who play the game at a higher level.</p>
              </div>
            </div>
            <div className="current-reads">
              <img src={multipliersbook} alt="multipliersbook" style={{width: "100%", display: "block"}}/>
              <div className="books-overlay">
                <p style={{margin: "10px"}}>Multipliers by Liz Wiseman is a leadership book that highlights the difference between diminishers and multipliers. It shows how to create a culture of empowerment, where the team members feel valued and can unleash their full potential.</p>
              </div>
            </div>
            <div className="current-reads">
              <img src={rightkindbook} alt="rightkindbook" style={{width: "100%", display: "block"}}/>
              <div className="books-overlay">
                <p style={{margin: "10px"}}>A revolutionary guide that will transform your relationship with failure, from the pioneering researcher of psychological safety and award-winning Harvard Business School professor Amy Edmondson.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
