import React, {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Signup.css';

import {connect} from "react-redux";
import * as userActions from "../../redux/actions/userActions";
import nlogo from "../../images/nlogo.jpeg"
import nbkg from "../../images/nbkg.png"
import {Redirect} from "react-router-dom";

const Signup = (props) => {

  const [signupCred, setSignupCred] = useState({
    name : "",
    username : "",
    role : "donor",
    password : "",
    description : "",
    address: "",
    contact:null
  })

  const changeHandler = (event)=>{
    setSignupCred((prev)=>{
      return {
        ...prev,
        [event.target.name] : event.target.value
      }
    })
  }

  const [rdirect, setRDirect] = useState(false);

  async function asyncSignup(){
    await props.signupInit(signupCred);
  }

  if(rdirect){
    return <Redirect to="/Login"/>
  }

  return (
    <div className="SignupContainer"   style={{
      backgroundImage: `url(${nbkg})`,
      backgroundSize: 'cover',
      
      }}>
      <Form className='Signup'>
        <Row>
          <Col className="logo">
          <img src={nlogo}></img>
          </Col>
          <Col className="SignupForm">
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Name</Label>
                  <Input type="text" name="name" id="exampleEmail" placeholder="Enter name" 
                  onChange={changeHandler} value={signupCred.name}/>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" 
                  onChange={changeHandler} value={signupCred.password}/>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup className='usernamebox'>
              <Label for="exampleUsername">Email/UserName</Label>
              <Input type="text" name="username" id="name" placeholder="Enter Your UserName"
              onChange={changeHandler} value={signupCred.username}/>
            </FormGroup>

            <FormGroup className='usernamebox'>
            <Label for="exampleRole">Role</Label>
            <Input type="select" name="role" id="exampleRole"
            onChange={changeHandler} value={signupCred.role}>
                <option>donor</option>
                <option>ngo</option>
              </Input>
            </FormGroup>

            <FormGroup className='usernamebox'>
              <Label for="description">Description</Label>
              <Input type="textarea" name="description" id="description" value={signupCred.description} 
              onChange={changeHandler}/>
            </FormGroup>

            <FormGroup className='usernamebox'>
              <Label for="address">Address</Label>
              <Input type="textarea" name="address" id="address" value={signupCred.address} 
              onChange={changeHandler}/>
            </FormGroup>

            <FormGroup className='usernamebox'>
              <Label for="contact">Contact</Label>
              <Input type="text" name="contact" id="contact" value={signupCred.contact} 
              onChange={changeHandler}/>
            </FormGroup>

            <Button className='buto' onClick={()=>{
              console.log(signupCred)
              asyncSignup().then(()=>{
                setRDirect(true)}
              )
            }}>Sign Up</Button>
          </Col>
        </Row>
      </Form>
    </div>
      
  );
}

const mapDispatchToProps = (dispatch)=>{
  return {
    signupInit : (signupCred)=>dispatch(userActions.signupInit(signupCred))
  }
}


export default connect(null, mapDispatchToProps)(Signup);