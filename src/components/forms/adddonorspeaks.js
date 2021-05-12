import React, { Component } from 'react';
import {Container, Row, Col,Button} from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem, Jumbotron,Input } from "reactstrap";
import {Link} from 'react-router-dom'
import './forms.css'
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import {connect} from 'react-redux';
import {postDonorSpeak} from '../../redux/actions/donorspeaks';
import blogFormBG from '../../images/blogform.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import admed from '../../images/n.jpg';

const mapStateToProps = (state) => {
    return {
        name:state.user.name,
        token:state.user.token,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        postDonorSpeak: (donorspeak,name,token)=>
            dispatch(postDonorSpeak(donorspeak,name,token)),
    }
}
class addDonorspeaks extends Component{
    constructor(props){
        super(props);
        this.state = {
            heading:'',
            description:'',
            errors: {
                heading:'',
                description:'',
            },
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
          [name]: event.target.value
        });
    }

    notifyS = (message) => toast.success(message);
    notifyF = (message) => toast.warning(message );
    handleSubmit = async(event) => {
        event.preventDefault();
        const isValid = this.formValidation();
        console.log(this.state);
        if(isValid){
            const newDonorspeak = {
                heading:this.state.heading,
                description:this.state.description,
                author:this.props.name,
                
            };
            await this.props.postDonorSpeak(newDonorspeak);
            this.notifyS('Donor Speaks posted successfully 😃!!')
        }
        
    }

    formValidation = () => {
        const{heading,description}=this.state;
        let headingError='', 
        descriptionError='',
        error;
        if(!heading.trim()){
            headingError = "Heading is required";
            error=true;
        }
        if(!description.trim()){
            descriptionError = "Description is required!";
            error=true;
        }
        this.setState((prevState) => ({
            errors:{
                heading:headingError,
                description:descriptionError,
            },
        }));
        return !error;
    };
    render() {
        return (
          <div
            style={{
              backgroundImage: `url(${admed})`,
              backgroundSize: 'cover',
              padding: '5% 10% 8% 10%',
              marginTop:'-20px',
            }}
          >
           <div className='container'>
        <div fluid className="form-heads-donor" style={{marginTop:"-40px"}}>
          <Container>
              <h2 style={{fontSize: '5.7rem'}} >ADD DONOR SPEAKS </h2> 
              <p><i>Tell the world about your experience of donating and help motivate the people around you</i></p>
              
          </Container>
        </div>

            <div className='forms__section'>
              <Container>
                <Col md={12} className='contact__main__content'>
                 
                  <div className='blogform_div'>
                    <Jumbotron className='form-jumbotron'>
                      <Form>
                        <Form.Group controlId='formBasicEmail'>
                          <Form.Label>
                            <span className='form__icon'></span>Heading
                          </Form.Label>
                          <input
                            name='heading'
                            className='form-control'
                            type='text'
                            value={this.state.heading}
                            placeholder='Give a descriptive Heading.'
                            onChange={this.handleInputChange}
                          />
                          <div className='invalid__feedback'>
                            {this.state.errors.heading}
                          </div>
                        </Form.Group>
                        <Form.Group controlId='formBasicEmail'>
                      <Form.Label>Description</Form.Label>
                      <Input
                        type='textarea'
                        name='description'
                        rows={10}
                        value={this.state.description}
                        placeholder='Write  content here'
                        onChange={this.handleInputChange}
                      />
                          <div className='invalid__feedback'>
                            {this.state.errors.description}
                          </div>
                        </Form.Group>
                        <Button
                          className='mt-4'
                          onClick={this.handleSubmit}
                          variant='info'
                        >
                          <span className='fa fa-paper-plane mr-3' />
                          SUBMIT DONOR-SPEAKS
                        </Button>
                      </Form>
                    </Jumbotron>
                  </div>
                </Col>
              </Container>
              <ToastContainer 
              color="yellow"          
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
                 />
            </div>
          </div>
          </div>
        );
      }
    }
    
    

export default connect(mapStateToProps,mapDispatchToProps)(addDonorspeaks);