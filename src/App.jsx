import './App.css'
import management from './assets/management.png'
import Accordion from './components/Accordion'

function App() {

  return (
    <div className='main-content-div'>
      <div className="left-content-div">
        <div className="profile-image"></div>
        <h2 style={{fontFamily: "'Playfair Display SC', serif", fontSize: "2em", marginBottom: "0em"}}>Linet Okumu</h2>
        <p><span style={{color: "#2c98f0"}}>TRAINING MANAGER</span> IN THE UAE</p>
        <div className="nav-links-div">
          <a href="#home" className="nav-links">HOME</a>
          <a href="#about" className="nav-links">ABOUT</a>
          <a href="#services" className="nav-links">SERVICES</a>
          <a href="#skills" className="nav-links">SKILLS</a>
          <a href="#education" className="nav-links">EDUCATION</a>
          <a href="#experience" className="nav-links">EXPERIENCE</a>
          <a href="#work" className="nav-links">WORK</a>
        </div>
      </div>
      <div className="right-content-div">
        <div className="right-content-header">
          <h1 style={{fontSize: "3em", fontFamily: "'Playfair Display SC', serif"}}>Hi!<br/> I'm Linet Okumu.</h1>
          <button className='right-content-button'>DOWNLOAD CV</button>
        </div>
        <div style={{margin: "0px 2em"}}>
          <p style={{fontSize: "0.9em", marginBottom: "1em", color: "rgba(0, 0, 0, 0.6)"}}>ABOUT</p>
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
          <div className="expertise-div" style={{marginBottom: "6em", marginTop: "3em"}}>
            <div className="expertise" style={{borderBottom: "2px solid blue"}}>
              <img src={management} alt="management" style={{height: "2em"}}/>
              <p>Leadership and management essentials</p>
            </div>
            <div className="expertise" style={{borderBottom: "2px solid green"}}>
              <img src={management} alt="management" style={{height: "2em"}}/>
              <p>High potential leaders</p>
            </div>
          </div>
          <div className="parallax">
            <p>one</p>
            <p>two</p>
            <p>three</p>
          </div>
          <p style={{fontSize: "0.9em", marginBottom: "1em", color: "rgba(0, 0, 0, 0.6)"}}>EDUCATION AND CERTIFICATIONS</p>
          <p style={{fontSize: "1.2em", marginBottom: "3em"}}>EDUCATION</p>

          <div className="education" style={{marginBottom: "6em"}}>
            <Accordion textContent="Developing yourself as a leader. January - April 2024" title="Harvard Business School Executive Education"/>
            <Accordion textContent="Executive MBA 2019 - 2021" title="HULT International Business School"/>
            <Accordion textContent="Masters: Post graduate diploma in Business Administration 2008 - 2013" title="University of Leicester - UK"/>
            <Accordion textContent="Becoming a better manager - Management Essentials 2018" title="Harvard Business School Online"/>
            <Accordion textContent="University Diploma in Aviation Security Management 2006 - 2007. Distinction" title="Edith Cowan University"/>
            <Accordion textContent="CIPD 2014 - 2025" title="Chartered Institute of Personnel and Development Practice"/>
            <Accordion textContent="Leadership and management diploma 2014 - 2015, Diploma in Airline studies 2003 - 2005. Distinction" title="IATA Training"/>
            <Accordion textContent="Degree: Bachelor of arts 1998 - 2002. 2nd Class Honours Upper Division" title="Maseno University - Kenya"/>
          </div>

          <p style={{fontSize: "0.9em", marginBottom: "1em", color: "rgba(0, 0, 0, 0.6)"}}>WORK EXPERIENCE</p>
          <p style={{fontSize: "1.2em", marginBottom: "3em"}}>WORK EXPERIENCE</p>

          <div className="timeline" style={{marginBottom: "4em"}}>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <h2 style={{marginTop: "10px"}}>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint dignissimos doloremque? Natus soluta voluptatum, mollitia possimus expedita deserunt iste.</p>
              </div>
            </div>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <h2 style={{marginTop: "10px"}}>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint dignissimos doloremque? Natus soluta voluptatum, mollitia possimus expedita deserunt iste.</p>
              </div>
            </div>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <h2 style={{marginTop: "10px"}}>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint dignissimos doloremque? Natus soluta voluptatum, mollitia possimus expedita deserunt iste.</p>
              </div>
            </div>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <h2 style={{marginTop: "10px"}}>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint dignissimos doloremque? Natus soluta voluptatum, mollitia possimus expedita deserunt iste.</p>
              </div>
            </div>
          </div>

          <p style={{fontSize: "0.9em", marginBottom: "1em", color: "rgba(0, 0, 0, 0.6)"}}>VOLUNTEER WORK</p>
          <p style={{fontSize: "1.2em", marginBottom: "3em"}}>VOLUNTEER WORK</p>
        </div>
      </div>
    </div>
  )
}

export default App
