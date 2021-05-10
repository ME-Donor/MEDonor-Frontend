import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css";
import img1 from './img1.png';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.PNG';
import logo from './logo.png';
import {Jumbotron , Container , Row , Col , Button} from 'react-bootstrap'
function home() {
    
    return (
        <div className="homepage-home">
            <Jumbotron fluid  className="jumbo-home" style={{backgroundColor: '#085053' , marginTop:"-25px"}}>
                <Container className="jumbo-container">
                    <img className="logo-home" src={logo} alt=""/>
                    <h1 className="medonor-heading" style={{color: "#fff"}}>MEDONOR</h1>
                    <h1 className="main-title-home" style={{color:"#0D9EA4" , fontSize:"40px"}}>Reimagining access for those in need</h1>
                    <p className="sub-sub-para">
                        MEDONOR drives the future of healthcare by 
                        connecting people with surplus medications.
                    </p>
                </Container>
            </Jumbotron>


            <Container className="content">
                <Row>
                    <Col>
                        <h3 className="content-h3-home">
                            Why Medicine?
                        </h3>
                        <p className="extra">
                            Because our health is a fundamental part of being human. 
                            Without it, we have nothing.
                        </p>
                        <p className="para" style={{fontSize:"2.2rem"}}>
                            50 million Indians don’t take their prescribed medication 
                            because they can’t afford it. With soaring copays, deductibles, 
                            and insurance costs, many people are making impossible choices 
                            between medications, food and housing, gas to get to work, 
                            and more. Not taking your medications, however, often leads to 
                            even worse outcomes—heart attacks, strokes, and even higher costs. 
                            This is our nation’s most critical problem, but it doesn’t have 
                            to be. That’s why we’re here. MEDONOR provides access so everyone 
                            gets the care they deserve.
                        </p>
                    </Col>
                    <Col>
                        <img src={img1} alt="" className="home-image-2" />
                    </Col>
                </Row>

                <hr style={{borderBottom: "0.35px solid #c2cccc" , width:"90%"}}/>

                <Row>
                    <Col>
                        <img src={img2} alt="" className="home-image-3"/>
                    </Col>
                    <Col>
                        <h3 className="content-h3-home">
                            MEDONOR saves medicine to save lives
                        </h3>
                        <p className="para" style={{fontSize:"2.2rem"}}>
                            We’re dedicated to saving lives, bringing a change and help people who cannot afford medications. 
                            Our system is built to ensure compliance and provide full 
                            liability protection.
                        </p>
                    </Col>
                </Row>

                <hr style={{borderBottom: "0.35px solid #c2cccc" , width:"90%" , opacity:"35%"}}/>

                <Row>
                    <Col>
                        <h3 className="content-h3-home">Who can donate?</h3>
                        <p className="para" style={{fontSize:"2.2rem"}}>
                            MEDONOR directly accepts medicine from individuals, manufacturers, 
                            pharmacies, wholesalers, and health facilities. Every little bit helps, and 
                            we appreciate your support.
                            <br/><br/>
                            Know more about the generous donors and NGOs who have been works for this greater cause
                        </p>
                        <Button variant="info" size="lg" style={{margin:"20px"}}>
                            Donor Speaks
                        </Button>{' '}
                        <Button variant="info" size="lg" style={{margin:"20px"}}>
                            Beneficiary talks
                        </Button>{' '}
                    </Col>
                    <Col>
                        <img src={img3} alt="" className="home-image-4"/>
                    </Col>
                </Row>

                <hr style={{borderBottom: "0.35px solid #c2cccc" , width:"90%" , opacity:"90%"}}/>

                <Row>
                    <Col>
                        <img src={img4} alt="" className="home-image-5"/>
                    </Col>
                    <Col>
                    <h3 className="content-h3-home">How does it work?</h3>
                        <p className="para" style={{fontSize:"2.2rem"}}>
                            Our goal is to locate surplus medication and get them to the 
                            people who need them.
                        </p>
                    </Col>
                </Row>

            </Container>


        </div>
        );
    }
    export default home;