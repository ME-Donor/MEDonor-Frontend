import { useState, useEffect } from 'react'
import { Header } from './header'
import { Features } from './features'
import { About } from './about' 
import { Testimonials } from './testimonials'
import JsonData from './data.json'
import SmoothScroll from 'smooth-scroll'
import './wth.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Container , Jumbotron , Button , Modal} from 'react-bootstrap'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const WTH = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Header data={landingPageData.Header} />

      <About data={landingPageData.About} />
      
      <hr style={{borderBottom:"1px solid #085053" , width:"75%" , opacity:"50%"}} />
      
      <Features data={landingPageData.Features} />
      
      <hr style={{borderBottom:"1px solid #085053" , width:"75%" , opacity:"50%"}} />

      <Jumbotron style={{backgroundColor:"#fff"}}>
        <Container>
          <h1 className="how-to-donate" style={{textAlign:"center" , color:"#1e7b75"}}>How to Donate</h1>
        </Container>
      </Jumbotron>

      <Container className="timeline-complete">
        <div class="container">
          <div class="main-timeline">
            
            <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                    <div class="date-outer">
                        <span class="date">
                          <span class="month">STEP</span>
                          <span class="year">1</span>
                        </span>
                    </div>
                </div>
                <div class="timeline-content">
                    <h5 class="title">SIGN UP FOR MEDONOR</h5>
                    <p class="description">
                        Click the <b>Sign in</b> button to register. Select the <br/>
                        appropriate role. If you are willing to donate medicines, <br/>
                        select yor role as 'Donor' and if you are willing to <br/>
                        register your NGO select your role as 'NGO'.<br/>
                    </p>
                </div>
            </div>
            <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                    <div class="date-outer">
                        <span class="date">
                          <span class="month">STEP</span>
                          <span class="year">2</span>
                        </span>
                    </div>
                </div>
                <div class="timeline-content">
                    <h5 class="title">LIST OF MEDICINES and NGOs</h5>
                    <p class="description">
                        After registration, NGOs will be able to find the list of 
                        <br/>
                        medicines availabe and donors will see a list of NGOs in 
                        <br/>
                        need of medicines.

                    </p>
                </div>
            </div>
            <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                    <div class="date-outer">
                        <span class="date">
                          <span class="month">STEP</span>
                          <span class="year">3</span>
                        </span>
                    </div>
                </div>
                <div class="timeline-content">
                    <h5 class="title">MEDICINES YOU CAN DONATE</h5>
                    <p class="description">
                        Everything you need to know about the medicines we accept.
                        <br/><br/>
                        
                    </p>
                </div>
            </div>
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <span class="month">STEP</span>
                    <span class="year">4</span>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <h5 class="title">DONATE YOUR UNUSED MEDICINES</h5>
                <p class="description">
                  You can saves time and money and helps those in need. Just 
                  let the NGO know when a donation is ready and they will 
                  arrange the pickup.
                </p>
              </div>
            </div>
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <span class="month">STEP</span>
                    <span class="year">5</span>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <h5 class="title">EVERYONE BENEFITS</h5>
                <p class="description">
                  NGOs will send you a note detailing how much the medication was worth, and how many people it helped.
                </p>
              </div>
            </div>
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <span class="month">STEP</span>
                    <span class="year">6</span>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <h5 class="title">SHARE YOUR EXPERIENCE</h5>
                <p class="description">
                  NGOs can briefly expresses how our organization’s work has benefited the community. <b>(Beneficiary Talks)</b>
                  Donors can express how their donation positively impacted many lives. <b>(Donor Speaks)</b>
                  This will inspire people to work for the same cause.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </Container>
      
      <Testimonials data={landingPageData.Testimonials} />

    </div>
  )
}

export default WTH;
