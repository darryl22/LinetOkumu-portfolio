import React from 'react'
import './App.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import management from './assets/management.png'
import Accordion from './components/Accordion'
import hultprize from './assets/hult-prize.png'
import hultprize1 from './assets/hultimage1.jpg'
import hultprize2 from './assets/hultimage2.jpg'
import impactplayers from "./assets/impact-players-book.jpg"
import multipliersbook from './assets/multipliers-book.jpg'
import rightkindbook from './assets/right-kind-book.jpg'
import lastingimpressions from './assets/lasting-impressions.jpeg'
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
import volunteerwork1 from './assets/volunteerwork1.jpg'
import volunteerwork2 from './assets/volunteerwork2.jpg'
import volunteerwork3 from './assets/volunteerwork3.jpg'
import educationpicture1 from './assets/educationpicture1.jpg'
import educationpicture2 from './assets/educationpicture2.jpg'
import educationpicture3 from './assets/educationpicture3.jpg'
import educationpicture4 from './assets/educationpicture4.jpg'
import educationpicture5 from './assets/educationpicture5.jpg'
import educationpicture6 from './assets/educationpicture6.jpg'
import educationpicture7 from './assets/educationpicture7.jpg'
import educationpicture8 from './assets/educationpicture8.jpg'
import educationpicture9 from './assets/educationpicture9.jpg'
import workexperience1 from './assets/workexperience1.jpg'
import workexperience2 from './assets/workexperience2.jpg'
import workexperience3 from './assets/workexperience3.jpg'
import bookpicture1 from './assets/bookpicture1.jpg'
import bookpicture2 from './assets/bookpicture2.jpg'
import bookpicture3 from './assets/bookpicture3.jpg'


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
  const responsiveCarousel = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
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
          <h1 className='header-title'>Hi!<br/> I'm Linet Okumu.</h1>
        </div>
        <div style={{margin: "0px 2em"}}>
          <p style={{fontSize: "0.9em", marginBottom: "1em", color: "rgba(0, 0, 0, 0.6)", scrollMarginTop: "50px"}} id='about'>ABOUT</p>
          <p style={{fontSize: "1.2em", marginBottom: "3em"}}>WHO AM I</p>
          <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)"}}>
            Linet is a Professional with over 21 years of experience in the Aviation industry, having resided 
            in Dubai since 2003. An Aviation enthusiast with -depth experience and passion in Leadership, Learning 
            and development and Talent Management.
          </p>
          <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)"}}>
            Linet started her career in 2002 with Barclays Bank Kenya and soon after moved to Emirates Airline in 2003. Linet 
            holds an EMBA from HULT International Business School where she received the Growth Mindset Award 2021 and Dean's 
            list academic achievement in spring 2021 and holds qualifications from other renowned institutions including Harvard Business School Executive Education where she completed the 'Developing Yourself as a Leader course' with a Distinction.
          </p>
          <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)"}}>
            Linet is always paying forward through her societal charitable work and by conducting free career coaching and 
            mentoring to family, friends, colleagues, and students. She is inspired to make a positive impact on the future of 
            work. She has received many Awards and Honors for her professional and volunteer work.
          </p>
          <p style={{fontWeight: "bold"}}>"We pay a high interest for the mistakes we make with people"</p>

          <p style={{fontSize: "0.9em", marginTop: "3em", color: "rgba(0, 0, 0, 0.6)", scrollMarginTop: "50px"}} id='skills'>EXPERTISE</p>
          <p style={{fontSize: "1.2em", marginBottom: "3em"}}>EXPERTISE</p>

          <div className="expertise-div" style={{marginBottom: "6em", marginTop: "3em"}} id='skills'>
            <div className="expertise" style={{borderBottom: "2px solid blue"}}>
              <div className='expertise-circle' style={{backgroundColor: "rgb(255, 147, 147)"}}>
                <img src={management} alt="management" style={{height: "2.5em"}}/>
              </div>
              <p style={{fontWeight: "bold"}}>Leadership and Management Essentials</p>
              <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)"}}>
                The two most common words in the workplace and daily interactions. The transition to Leadership and Management is critical. 
                One must look at both the horizontal and vertical components of leadership and management and embrace an embodied learning 
                of self and others. Who shapes the different leadership and management styles, and what is the role of EI and PQ?
              </p>
            </div>
            <div className="expertise" style={{borderBottom: "2px solid green"}}>
              <div className='expertise-circle' style={{backgroundColor: "rgb(255, 205, 104)"}}>
                <img src={management} alt="management" style={{height: "2.5em"}}/>
              </div>
              <p style={{fontWeight: "bold"}}>Talent Management Fundamentals</p>
              <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)"}}>
                The ability to identify unique potentials within the team and empower them to perform is critical to talent 
                management and development. A leader should be able to manage talent transitions and talent life cycles. This 
                calls for a specific cultural mindset at various levels within the organisation. What do we learn from the 
                lens of the world view? 
              </p>
            </div>
          </div>
          <div className="expertise-div" style={{marginBottom: "6em", marginTop: "3em"}} id='skills'>
            <div className="expertise" style={{borderBottom: "2px solid blue"}}>
              <div className='expertise-circle' style={{backgroundColor: "rgb(147, 190, 255)"}}>
                <img src={management} alt="management" style={{height: "2.5em"}}/>
              </div>
              <p style={{fontWeight: "bold"}}>Preparing for the Corporate World</p>
              <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)"}}>
                Understanding the relevant and essential skills within the corporate world helps one to gain momentum in the 
                first 100 days. Manoeuvring the various corporate ladders, knowing the corporate culture, adopting a positive 
                mindset, and creating healthy relationships becomes key to dealing more pro-actively with challenges and 
                improving accountability. Some of the secrets lie in every employee's user manual.
              </p>
            </div>
            <div className="expertise" style={{borderBottom: "2px solid green"}}>
              <div className='expertise-circle' style={{backgroundColor: "rgb(149, 255, 147)"}}>
                <img src={management} alt="management" style={{height: "2.5em"}}/>
              </div>
              <p style={{fontWeight: "bold"}}>Professional and Personal Branding</p>
              <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)"}}>
                Professional and personal branding is about self-discovery. Everyone has a brand, and there is a personal choice to 
                be made on whether and how to protect and invest in the brand. It is important to know how to create, elevate and 
                pitch a professional and personal brand, and understand what your personal balance sheet [not financial] tells you 
                about your brand.
              </p>
            </div>
          </div>

          <div className="parallax">
            <p>Over 20 years of experience</p>
          </div>
          {/* <video width="500" height="400">
            <source src="https://youtu.be/gwCRNKFlzw4" type="video/mp4" />
          </video> */}
          <p style={{fontSize: "0.9em", marginBottom: "1em", color: "rgba(0, 0, 0, 0.6)", scrollMarginTop: "50px"}} id='education'>EDUCATION AND CERTIFICATIONS</p>
          <p style={{fontSize: "1.2em", marginBottom: "3em"}}>EDUCATION</p>

          <Carousel responsive={responsiveCarousel}>
            <div className="carousel-div" style={{backgroundImage: `url(${educationpicture1})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${educationpicture2})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${educationpicture3})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${educationpicture4})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${educationpicture5})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${educationpicture6})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${educationpicture7})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${educationpicture8})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${educationpicture9})`}}></div>
          </Carousel>

          <div className="education" style={{marginBottom: "6em", marginTop: "3em"}}>
            <Accordion 
              textContent="Developing Yourself As A Leader. January - April 2024"
              description="Courses completed - Being ready as a High-Potential Leader, Understanding Your Leadership Profile, Design Thinking for Your Trajectory, Nurturing a Leadership Mindset, Transitions, Hire Your Next Job, Momentum, Crafting Your Story, Negotiating Your Career as a Rebel Talent, The Qualified Self, Improvising, Thriving, Coaching for Talent Development *Received Executive Coaching Sessions*."
              title="Harvard Business School Executive Education"
              image={harvardlogo}
            />
            <Accordion 
              textContent="Executive MBA 2019 - 2021"
              description="Courses completed - Leading with Personal Impact, Leading Globally, International Marketing, Operations Management, Financial Management, Accounting, Organisational Performance, Business Behaviour & Diversity, Change Management, Management Psychology, Leading Change, Leading for Innovation, Global Strategy, Managerial Economics, Business & Global Society, Future Mindset & Challenge, Business Law and Ethics in Practice, Crisis Management, Mitigation & Response, International Business Consulting, Talent Management."
              title="HULT International Business School"
              image={hultlogo}
            />
            <Accordion 
              textContent="Masters: Post Graduate Diploma in Business Administration 2008 - 2013"
              description="Courses completed - Organisational Behaviour, Strategy, Business Information & Analysis, Benchmarking, Accounting for Managers, Marketing, Design and Operations, Business ethics in a Global context."
              title="University of Leicester - UK"
              image={leicterlogo}
            />
            <Accordion 
              textContent="Becoming a Better Manager - Management Essentials 2018"
              description="Courses completed - A process perspective on Management, Shaping the Decision-Making process, Implementing for the present and learning for the future, Managing and Leading Change."
              title="Harvard Business School Online"
              image={harvardonline}
            />
            <Accordion 
              textContent="Leadership and Management Diploma, Harvard Manage Mentor & IATA Aviation/Airway Management and Operations 2014 - 2015"
              description="Courses completed - Safety Management Systems, Developing Employees, Change Management, Coaching, Leading People, Customer Focus, Writing Skills, Career Management, Delegation, Difficult Interactions."
              title="Harvard Business School Online"
              image={harvardonline}
            />
            <Accordion 
              textContent="University Diploma in Aviation Security Management 2006 - 2007. Distinction"
              description="Courses completed - Managing Aviation Threats and Incidents, Safeguarding the Aviation Industry, Aviation Security Operations."
              title="Edith Cowan University"
              image={ecu}
            />
            <Accordion 
              textContent="CIPD 2014 - 2015"
              description="Courses completed - Coaching, Mentoring, Organizational Change, Job Analysis, Human Resources, Preparing, delivering and evaluating L&D activities."
              title="Chartered Institute of Personnel and Development Practice"
              image={cipd}
            />
            <Accordion 
              textContent="Leadership and Management Diploma 2014 - 2015"
              description="Courses completed (2003, 2005) - Diploma in Airline Studies, Customer Care - Distinction, Station Management - Distinction, Airline Finance, Airline Marketing."
              title="IATA Training"
              image={iata}
            />
            <Accordion 
              textContent="Degree: Bachelor of Arts 1998 - 2002. 2nd Class Honours Upper Division"
              description="Courses completed - Bachelor of Arts Degree - 2nd Class Honors - Upper Division."
              title="Maseno University - Kenya"
              image={maseno}
            />
          </div>

          <p style={{fontSize: "0.9em", marginBottom: "1em", color: "rgba(0, 0, 0, 0.6)", scrollMarginTop: "50px"}} id='experience'>WORK EXPERIENCE</p>
          <p style={{fontSize: "1.2em", marginBottom: "3em"}}>WORK EXPERIENCE</p>

          <Carousel responsive={responsiveCarousel}>
            <div className="carousel-div" style={{backgroundImage: `url(${workexperience2})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${workexperience1})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${workexperience3})`}}></div>
          </Carousel>

          <div className="timeline" style={{marginBottom: "4em", marginTop: "4em"}}>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h2 style={{marginTop: "10px", marginBottom: "10px"}}>Training Manager</h2>
                  <p style={{marginTop: "0px", color: "gray"}}>EMIRATES</p>
                </div>
                <p>
                  Plan, develop and manage training courses in line with the Group's values, regulatory requirements, international 
                  standards and best practices. Identify and address training needs. Duties include but are not limited to managing 
                  training programs, compliance audits, talent acquisition and retention, performance management and review, quality 
                  assurance and stakeholder engagement.
                </p>
              </div>
            </div>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h2 style={{marginTop: "10px", marginBottom: "10px"}}>Training Specialist</h2>
                  <p style={{marginTop: "0px", color: "gray"}}>EMIRATES</p>
                </div>
                <p>
                  Ensured training standards and daily operations were in line with the Group’s values, regulatory requirements, 
                  international standards and best practices. Duties included but were not limited to course design, review and 
                  management, virtual course delivery, training needs analysis, performance management, development and review, 
                  talent acquisition, manpower planning and optimization, and review of monthly key performance indicators.
                </p>
              </div>
            </div>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h2 style={{marginTop: "10px", marginBottom: "10px"}}>Training Officer</h2>
                  <p style={{marginTop: "0px", color: "gray"}}>EMIRATES</p>
                </div>
                <p>
                  Conducted training programs in line with Group's values, regulatory requirements, international standards and 
                  best practices. Duties included but were not limited to training Pilots, Cabin Crew, and 3rd party airline staff 
                  in accordance with regulatory requirements, training needs analysis, performance management, developments & 
                  review, and manpower planning.
                </p>
              </div>
            </div>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h2 style={{marginTop: "10px", marginBottom: "10px"}}>Crew Trainer</h2>
                  <p style={{marginTop: "0px", color: "gray"}}>EMIRATES</p>
                </div>
                <p>
                  Delivered high impact competency-based training programmes on a part time basis to a multi-cultural audience, in 
                  line with corporate objectives and business planning. Duties included but were not limited to coaching and mentoring 
                  new trainers, confidential performance reviews, training pilots, cabin crew and 3rd party clients.
                </p>
              </div>
            </div>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h2 style={{marginTop: "10px", marginBottom: "10px"}}>Service Delivery - Inflight Services</h2>
                  <p style={{marginTop: "0px", color: "gray"}}>EMIRATES</p>
                </div>
                <p>
                  Managed performance of multi-cultural Cabin Crew of over 120 nationalities. Led, facilitated, and managed 
                  resources (time, product, and people) to achieve a world class customer service that met and exceeded customer 
                  expectations.
                </p>
              </div>
            </div>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h2 style={{marginTop: "10px", marginBottom: "10px"}}>Part Time Local Tutor</h2>
                  <p style={{marginTop: "0px", color: "gray"}}>EDITH COWAN UNIVERSITY</p>
                </div>
                <p>Part-time tutoring of students who were undertaking the Aviation Security Diploma with Edith Cowan University, in conjunction with Emirates Group Security.</p>
              </div>
            </div>
            <div className="timeline-container left-arrow">
              <div className="timeline-content">
                <div style={{display: "flex", flexDirection: "column"}}>
                  <h2 style={{marginTop: "10px", marginBottom: "10px"}}>Management Trainee Programme</h2>
                  <p style={{marginTop: "0px", color: "gray"}}>BARCLAYS BANK</p>
                </div>
                <p></p>
              </div>
            </div>
          </div>

          <p style={{fontSize: "0.9em", marginBottom: "3em", color: "rgba(0, 0, 0, 0.6)", scrollMarginTop: "50px"}} id='volunteerwork'>VOLUNTEER WORK</p>

          <p style={{fontSize: "1.2em", marginBottom: "0em"}}>HULT Prize 2022</p>
          <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)", marginBottom: "2em"}}>
            Nomination by my University Alumna to serve as Judge at the 2022 Hult-Prize On-Campus competition. An annual competition that supports and encourages creative ideas from university level students globally who are challenged to solve a pressing social issue. The Prize won ($1,000,000) is a partnership between Hult International Business School and the United Nations foundation.
          </p>
          
          <Carousel responsive={responsiveCarousel}>
            <div className="carousel-div" style={{backgroundImage: `url(${hultprize})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${hultprize1})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${hultprize2})`}}></div>
          </Carousel>

          <p style={{fontSize: "1.2em", marginBottom: "0em"}}>Peer Support Services for Flight and Cabin crew 2008 - 2024</p>
          <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)"}}>
          A trained Mental Health First Aider and Peer Supporter. Provided emotional support to Flight and Cabin Crew following critical incidents.
          </p>
          <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)"}}>
            Supported over 300 employees in March and April 2020 during Covid-19 pandemic by providing peer-to-peer support to lessen the impact of post traumatic-stress.
          </p>
          <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)"}}>
            Nominated Guest Speaker at the 2018 2nd International Peer Support Celebration Day that focused on Mental Health Awareness, 
            attended by over 90 employees from Emirates Airline, Fly Dubai, and Etihad Airways.
          </p>

          <p style={{fontSize: "1.2em", marginBottom: "0em"}}>Community Development</p>
          <p style={{lineHeight: "1.7", color: "rgba(0, 0, 0, 0.7)"}}>
            Continual support to a registered local community programme, supporting school learning events during term breaks in 
            Kenya, to embrace the continual learning culture for under privileged children. The programme oversees over 100 children 
            engaged in productive initiatives during long periods of absence from school, which include environmental activities, 
            safe play and learning through the library.
          </p>

          <Carousel responsive={responsiveCarousel}>
            <div className="carousel-div" style={{backgroundImage: `url(${volunteerwork1})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${volunteerwork2})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${volunteerwork3})`}}></div>
          </Carousel>

          <p style={{fontSize: "0.9em", marginBottom: "0em", color: "rgba(0, 0, 0, 0.6)", marginTop: "5em", scrollMarginTop: "50px"}} id='currentreads'>CURRENT READS</p>
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
            <div className="current-reads">
              <img src={lastingimpressions} alt="lastingimpressions" style={{width: "100%", display: "block"}}/>
              <div className="books-overlay">
                <p style={{margin: "10px"}}>First impressions are important, but it's the lasting impression that truly matters - the lasting impression made through service excellence.</p>
              </div>
            </div>
          </div>

          <Carousel responsive={responsiveCarousel}>
            <div className="carousel-div" style={{backgroundImage: `url(${bookpicture1})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${bookpicture2})`}}></div>
            <div className="carousel-div" style={{backgroundImage: `url(${bookpicture3})`}}></div>
          </Carousel>

          <div style={{width: "100%", height: "1px", backgroundColor: "gray", marginBottom: "2em"}}></div>
          <a href="https://www.linkedin.com/in/linet-okumu/" style={{textDecoration: "none"}}>My Linkedin</a><br />
          <p style={{marginBottom: "3em"}}>Copyright @2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default App
