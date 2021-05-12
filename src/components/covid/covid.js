import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./covid.css";

import covidimg1 from './covid-img-1.png'
import covidimg2 from './covid-img-2.png'
import covidimg3 from './covid-img-3.png'
import covidimg4 from './covid-img-4.png'
import covidimg5 from './covid-img-5.png'
import covidimg6 from './covid-img-6.png'
import covidimg7 from './covid-img-7.png'
import covidimg8 from './covid-img-8.png'
import covheader from './covid-header.png';

import {Container , Row , Col , Button} from 'react-bootstrap'
function covid() {
    
    return (
        <div className="covid-page">
            
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <img src={covheader} alt=""  className="covid-header-img"/>
                    </Col>
                    <Col className="covid-header-text">
                        <h1 className="covid-header-text-h1">
                            #InThisTogether
                        </h1>
                        <p className="para" style={{fontSize:"2.2rem"}}> 
                            The COVID-19 pandemic is one of the worst health and economic crises in modern history and it continues 
                            to require the best of humanity to overcome.
                            <br/><br/>
                            If COVID-19 is spreading in your community, stay safe by taking some simple precautions
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container style={{marginTop:"100px"}}>
                    <Row className="justify-content-md-center">
                        <Col sm={2}>
                            <img src={covidimg1} alt=""  className="covid-img-list"/>
                        </Col>
                        <Col sm={10}>
                            <div className="covid-mask">
                                <p className="precaution-title">Masks in COVID-19</p>
                                <p>
                                    Masks should be used as part of a comprehensive strategy of measures to suppress transmission 
                                    and save lives; the use of a mask alone is not sufficient to provide an adequate 
                                    level of protection against COVID-19.
                                </p>
                                <p><b>
                                    Make wearing a mask a normal part of being around other people. The appropriate use, storage and 
                                    cleaning or disposal of masks are essential to make them as effective as possible.
                                </b></p>
                                <ul class="check-list">
                                    <li>Clean your hands before you put your mask on, as well as before and after you take it off, and after you touch it at any time.</li>
                                    <li>Make sure it covers both your nose, mouth and chin. </li>
                                    <li>When you take off a mask, store it in a clean plastic bag, and every day either wash it if it’s a fabric mask, or dispose of a medical mask in a trash bin.</li>
                                    <li>Don’t use masks with valves.</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col sm={2}>
                            <img src={covidimg2} alt=""  className="covid-img-list"/>
                        </Col>
                        <Col sm={10}>
                            <div className="covid-mask">
                                <p className="precaution-title">Stay 6 feet away from others</p>
                                <ul>
                                    <li>
                                        <b>Inside your home:</b> Avoid close contact with people who are sick.
                                        <ul class="check-list">
                                            <li>If possible, maintain 6 feet between the person who is sick and other household members.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <b>Outside your home:</b> Put 6 feet of distance between yourself and people who don’t live in your household.
                                        <ul class="check-list">
                                            <li>Remember that some people without symptoms may be able to spread virus.</li>
                                            <li>Stay at least 6 feet (about 2 arm lengths) from other people.</li>
                                            <li>Keeping distance from others is especially important for people who are at higher risk of getting very sick.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col sm={2}>
                            <img src={covidimg3} alt=""  className="covid-img-list"/>
                        </Col>
                        <Col sm={10}>
                            <div className="covid-mask">
                                <p className="precaution-title">Get Vaccinated</p>
                                <ul class="check-list">
                                    <li>Authorized COVID-19 vaccines can help protect you from COVID-19.</li>
                                    <li>You should get a COVID-19 vaccine when it is available to you.</li>
                                    <li>Once you are fully vaccinated, you may be able to start doing some things that you had stopped doing because of the pandemic.</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col sm={2}>
                            <img src={covidimg4} alt=""  className="covid-img-list"/>
                        </Col>
                        <Col sm={10}>
                            <div className="covid-mask">
                                <p className="precaution-title">Avoid crowds and poorly ventilated spaces</p>
                                <ul class="check-list">
                                    <li>Being in crowds like in restaurants, bars, fitness centers, or movie theaters puts you at higher risk for COVID-19.</li>
                                    <li>Avoid indoor spaces that do not offer fresh air from the outdoors as much as possible.</li>
                                    <li>If indoors, bring in fresh air by opening windows and doors, if possible.</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col sm={2}>
                            <img src={covidimg5} alt=""  className="covid-img-list"/>
                        </Col>
                        <Col sm={10}>
                            <div className="covid-mask">
                                <p className="precaution-title">Wash your hands often</p>
                                <p>
                                    Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public 
                                    place, or after blowing your nose, coughing, or sneezing.
                                    <br/><br/>
                                    It’s especially important to wash:
                                    <ul class="check-list">
                                        <li>Before eating or preparing food</li>
                                        <li>Before touching your face</li>
                                        <li>After using the restroom</li>
                                        <li>After leaving a public place</li>
                                        <li>After blowing your nose, coughing, or sneezing</li>
                                        <li>After handling your mask</li>
                                        <li>After caring for someone sick</li>
                                        <li>After touching animals or pets</li>
                                    </ul>
                                    If soap and water are not readily available, <b>use a hand sanitizer that contains at 
                                    least 60% alcohol.</b> Cover all surfaces of your hands and rub them together until 
                                    they feel dry.
                                    <br/><br/>
                                    <b>Avoid touching your eyes, nose, and mouth</b> with unwashed hands.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col sm={2}>
                            <img src={covidimg6} alt=""  className="covid-img-list"/>
                        </Col>
                        <Col sm={10}>
                            <div className="covid-mask">
                                <p className="precaution-title">Cover coughs and sneezes</p>
                                <p>
                                    <b>If you are wearing a mask:</b> You can cough or sneeze into your mask. Put on a new, 
                                    clean mask as soon as possible and wash your hands.
                                    <br/><br/>
                                    <b>If you are not wearing a mask:</b> 
                                    <ul class="check-list">
                                        <li>Always cover your mouth and nose with a tissue when you cough or sneeze, or use the inside of your elbow and do not spit.</li>
                                        <li>Throw used tissues in the trash.</li>
                                    </ul>
                                    <br/>
                                    Immediately <b>wash your hands</b> with soap and water for at least 20 seconds. If soap and water are not readily available, clean your hands with a hand sanitizer that contains at least 60% alcohol.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col sm={2}>
                            <img src={covidimg7} alt=""  className="covid-img-list"/>
                        </Col>
                        <Col sm={10}>
                            <div className="covid-mask">
                                <p className="precaution-title">Clean and disinfect</p>
                                <ul class="check-list">
                                    <li>Clean high touch surfaces daily. This includes tables, doorknobs, 
                                        light switches, countertops, handles, desks, phones, keyboards, toilets, 
                                        faucets, and sinks.
                                    </li>
                                    <li><b>If someone is sick or has tested positive for COVID-19, disinfect frequently touched surfaces.</b></li>
                                    <li><b>If surfaces are dirty, clean them</b> using detergent or soap and water prior to disinfection.</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col sm={2}>
                            <img src={covidimg8} alt=""  className="covid-img-list"/>
                        </Col>
                        <Col sm={10}>
                            <div className="covid-mask">
                                <p className="precaution-title">Monitor your health daily</p>
                                <ul class="check-list">
                                    <li>
                                        <b>Be alert for symptoms.</b> Watch for fever, cough, shortness of breath, or other symptoms <b>of COVID-19.</b>
                                        <br/>
                                        Especially important if you are running essential errands, going into the office or workplace, and in settings where it may be difficult to keep a physical distance of 6 feet.
                                    </li>
                                    <li>
                                        <b>Take your temperature</b> if symptoms develop.
                                        <br/>
                                        Don’t take your temperature within 30 minutes of exercising or after taking medications that could lower your temperature, like acetaminophen.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    
            </Container>

            


        </div>
        );
    }
    export default covid;