import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem, Jumbotron, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './forms.css';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import bg from '../../images/nbBGg.jpg';
import { postNgoBlog } from '../../redux/actions/ngoblogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    token: state.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postNgoBlog: (ngoblog, name, token) =>
      dispatch(postNgoBlog(ngoblog, name, token)),
  };
};

class addBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: '',
      description: '',
      errors: {
        heading: '',
        description: '',
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const isValid = this.formValidation();
    console.log(this.state);
    if (isValid) {
      const newBlog = {
        heading: this.state.heading,
        description: this.state.description,
        author: this.props.name,
      };
      this.props.postNgoBlog(newBlog);
    }
  }

  formValidation = () => {
    const { heading, description } = this.state;
    let headingError = ' ',
      descriptionError = ' ',
      error;
    if (!heading.trim()) {
      headingError = 'Heading is required';
      error = true;
    }
    if (!description.trim()) {
      descriptionError = 'Description is required';
      error = true;
    }
    this.setState((prevState) => ({
      errors: {
        heading: headingError,
        description: descriptionError,
      },
    }));

    return !error;
  };

  render() {
    return (
      <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        padding: '4% 6% 5% 8%',
        marginTop:'-19px',
      }}
    >
      <div className='container'>
        <div fluid className="form-heads-blog" style={{marginTop:"-40px"}}>
          <Container>
              <h2 style={{fontSize: '5.7rem'}} >ADD BLOG </h2> 
              <p><i> Write about stories of change, the amazing work done by your NGO or just anything you want to tell the world about :)</i></p>
              
          </Container>
        </div>
    
        <div className='forms__section abg'>
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
                        placeholder='Write blog content here'
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
                      Publish Blog
                    </Button>
                  </Form>
                </Jumbotron>
              </div>
            </Col>
          </Container>
        </div>
      </div>
      </div>
   
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addBlogs);
