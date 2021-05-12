import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import {Navbar , Nav , Button , NavDropdown , Form} from 'react-bootstrap';
import logo from './logo3.png';
import {connect} from "react-redux";
import {logout} from '../../redux/actions/userActions';



function Header(props) {
    
    return (
        <div>
            
            <Navbar expand="lg" className="main-navbar-hf">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="outline-primary" className="toggle-navbar-icon-hf" />
                <Navbar.Brand href="/" className="brand-span-hf">
                    <img alt="" src={logo} className="d-inline-block align-top logo-image-hf" />{' '}
                    <Navbar.Brand href="/" className="navbar-brand-name-hf">
                        <span>
                            MEDONOR
                        </span>
                    </Navbar.Brand>
                </Navbar.Brand>
                
                <Navbar.Collapse id="responsive-navbar-nav" className="nav-links-section-hf" inline>
                    <Nav className="mr-auto ">
                            <Nav.Link href="/" className="navbar-main-links-hf   ">
                                <span className="navbar-nav-links-hf">Home</span>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="/about" className="navbar-main-links-hf " >
                                <span className="navbar-nav-links-hf ">About us</span>
                            </Nav.Link>
                            <Nav.Link eventKey={3} href="/wth" className="navbar-main-links-hf " >
                                <span className="navbar-nav-links-hf ">Ways to Help</span>
                            </Nav.Link>
                            <Nav.Link eventKey={4} href="/covid" className="navbar-main-links-hf " >
                                <span className="navbar-nav-links-hf ">COVID-19</span>
                            </Nav.Link>

                            { props.role && <> 

                                <NavDropdown title="Know More" id="basic-nav-dropdown" className="navbar-main-links-dropdown navbar-nav-links-dropdown-hf navbar-nav-links-hf">
                                    <NavDropdown.Item eventKey={5} href="/donorspeaks">Donorspeaks</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={6} href="/ngoBeneficiary">Ngo Beneficiary</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={7} href="/blog">Blog</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={8} href="/medicinelist">Medicines available</NavDropdown.Item>
                                </NavDropdown>
                                </>}
                        
                            { props.role=== "admin" && <>
                                <Nav.Link eventKey={4} href='/usersList' className="navbar-main-links-hf">
                                    <span className="navbar-nav-links-hf">UsersList</span>
                                </Nav.Link>
                            </> }  
                            
                            { props.role=== "donor" && <> 
                                <NavDropdown title="Share with us" id="basic-nav-dropdown" className="navbar-main-links-dropdown navbar-nav-links-dropdown-hf navbar-nav-links-hf">
                                    <NavDropdown.Item eventKey={5} href="/adddonorSpeak">Add DonorSpeaks</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={6} href="/addmedicine">Add Medicine</NavDropdown.Item>
                                </NavDropdown>
                            </>} 
                            
                            { props.role=== "ngo" && <> 
                                <NavDropdown title="Share with us" id="basic-nav-dropdown" className="navbar-main-links-dropdown navbar-nav-links-dropdown-hf navbar-nav-links-hf">
                                    <NavDropdown.Item eventKey={5} href="/addBeneficiary">Add Beneficiary</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={6} href="/addblog">Add Blog</NavDropdown.Item>
                                </NavDropdown>
                            </>}
                    </Nav>
                </Navbar.Collapse>
                { props.role === null && <>
                    <Button variant="outline-light" href="/Login" className="sign-in-btn-hf" inline style={{border: "1px solid #fff" , borderRadius:"20px"}}>Sign in</Button>
                    {' '}</>} 
                        
                { props.role != null && <>
                    <Button variant="outline-light" onClick={props.logout} className="sign-in-btn-hf " inline style={{border: " 1px solid #fff" , borderRadius:"20px"}}>Log out</Button>
                    {' '}</>} 
                

            </Navbar>

            
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout : () => dispatch(logout()),
    }
}

const mapStateToProps = (state)=>{
    return {
        role : state.user.role
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
