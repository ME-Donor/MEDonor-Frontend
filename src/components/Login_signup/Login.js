import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';

import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import LoginCorousel from  "./Carousel";


const Login = (props) => {
  const [loginCred, setLoginCred] = useState({
    username: '',
    password: '',
  });

  const changeHandler = (event) => {
    setLoginCred((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div className="LoginContainer">
    <Row>
    <Col lg="6"><LoginCorousel/></Col>
    <Col lg="6">
    <Row>
    <div className="LoginDiv">
    <Form>
    <FormGroup>
      <Label for='exampleEmail'>Username</Label>
      <Input
        type='text'
        name='username'
        id='exampleEmail'
        placeholder='Enter Username'
        value={loginCred.username}
        onChange={changeHandler}
      />
    </FormGroup>

    <FormGroup>
      <Label for='examplePassword'>Password</Label>
      <Input
        type='password'
        name='password'
        id='examplePassword'
        placeholder='Enter Password'
        value={loginCred.password}
        onChange={changeHandler}
      />
    </FormGroup>
    </Form>
    <Button
      className='butto'
      onClick={() => {
        props.loginInit(loginCred);
        console.log(loginCred);
      }}
    >
      LogIn
    </Button>
    
    </div>
    </Row>
    <Row><div className="Otheroption"><center><Button className='butto' href='/Signup'>New User? Signup</Button></center></div></Row>
    
    </Col>
    </Row>
    </div>
    
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginInit: (loginCred) => dispatch(userActions.LoginInit(loginCred)),
  };
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
