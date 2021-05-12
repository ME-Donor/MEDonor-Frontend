import React, { Component } from 'react'
import "./about.css";
import Capture3 from '../../images/Capture3.PNG';
import gr from '../../images/gr.png';
import ad from '../../images/ad.png';
import jatin from '../../images/jatin.png';
import ni from '../../images/ni.png';
import { Row, Col, Jumbotron , Container } from "react-bootstrap";



class about extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className=" text-center">
          <Jumbotron fluid  className="jumbo-home" style={{backgroundColor: '#085053' , marginTop:"-25px"}}>
            <h1 className="medonor-heading" style={{color: "#fff", fontSize:"5rem"}}> We save medicines to save lives.<br/>You can help.</h1>

            <p className="main-title-home hh" style={{color:"#88DADC" , fontSize:"30px"}}>WE TAKE SURPLUS MEDICINES OFF YOUR HAND <br/>AND GET THEM TO THE PEOPLE WHO NEED THEM</p>
            <p className="sub-sub-para " style={{ fontSize:"20px"}}> The unused or unwanted medicines you want to donate are taken by NGO's and given to the people who really need them</p>
          </Jumbotron>
          <div className="about">
            <img className="image1" src={Capture3} alt="" />
            <br></br>
            <br></br>

            <h2>Vision and Mission</h2>
          </div>

          <hr></hr>

          <div className="container">
            <Row>
              <Col md={6} className="vis-mis">
                <h2 className="content-h3-about">
                  Vision
                </h2>
                <p className="para">
                  A happy and healthy society where everyone cares for the needs of the people around them, where everyone is willing to help and to donate to save lives. To build a society where no medicine goes to waste and everyone has access to all the mediccation they need without financial burdens. 
          
                        </p>
              </Col>


              <Col md={6} className="vis-mis">
                <h2 className="content-h3-about">
                  Mission
                </h2>
                <p className="para">
                  To enable people to take responsibility for the situation at hand and to motivate them to donate and help the people in need around them. To get surplus medicines to the people in need, to help people realize their power to change someone's life just by a single donation.
            
                        </p>
              </Col>
            </Row>
          </div>
          <br></br>

        </div>
      <Container fluid>
        <div className="faqq">
          <br></br>
          <br></br>
          <div className=" text-center about">
            <h1>FAQ's</h1>
          </div>



          <div className="ccontainer">

            <div className="faq-drawer">
              <input className="faq-drawer__trigger" id="faq-drawer" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer">Is this program free? </label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  <p className="fqans">
                    Yes, this program is free for all donations.
              </p>
                </div>
              </div>
            </div>
            <div className="faq-drawer">
              <input className="faq-drawer__trigger" id="faq-drawer-2" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-2">Why should I donate medicine?</label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  <p className="fqans">
                    Your unused medicines could really be of use to someone and save lifes.
              </p>
                </div>
              </div>
            </div>
            
          <div className="faq-drawer">
              <input className="faq-drawer__trigger" id="faq-drawer-3" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-3">How are the donations done?</label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  <p className="fqans" >
                   NGO's contact donors who've put up medicines for donation, they then come and pick up medicines from the donor's place or the donor can go and drop them at the NGO, whichever suits both.
              </p>
                </div>
              </div>
    </div>
            <div className="faq-drawer">
              <input className="faq-drawer__trigger" id="faq-drawer-4" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-4">Is this legal?</label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  <p className="fqans">
                    Yes, it is legal.
              </p>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>



        <span className="brmedium"></span>
        <div className="about">
          <h1 className="text-center" > Our Team </h1>
        </div>
        <br></br>

        <div className="conttainer">
          <Row>
            <Col md={3}>
              <img src={ni} alt="..." className="img-circle pict" />
              <br></br>
              <br></br>
              <h4 className="n1"><b>Nisha</b></h4>
              <h4 className="r1" style={{marginLeft:"-60px"}}>Backend and Frontend</h4>
            </Col>
            <Col md={3}>

              <img src={gr} alt="..." className="img-circle pict" />

              <br></br>
              <br></br>
              <h4 className="n2"><b>Gursimran Kaur</b></h4>
              <h4 className="r2">Frontend</h4>

            </Col>
            <Col md={3}>

              <img src={ad} alt="..." className="img-circle pict" />
              <br></br>
              <br></br>
              <h4 className="n3"><b>Aditi Panigrahi</b></h4>
              <h4 className="r3">Frontend</h4>
            </Col>
            <Col md={3}>

              <img src={jatin} alt="..." className="img-circle pict" />
              <br></br>
              <br></br>
              <h4 className="n4"><b>Jatin Gupta</b></h4>
              <h4 className="r4">Frontend</h4>
            </Col>
          </Row>
        </div>

        <span className="brmedium"></span>
        </Container>
      </div >



    )
  }
}


export default about;