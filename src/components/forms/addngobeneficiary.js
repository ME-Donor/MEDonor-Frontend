import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem, Jumbotron, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './forms.css';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import blogFormBG from '../../images/blogform.jpg';
import { postNgoBeneficiary } from '../../redux/actions/ngobeneficiary';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    token: state.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postNgoBeneficiary: (ngobeneficiary, name, token) =>
      dispatch(postNgoBeneficiary(ngobeneficiary, name, token)),
  };
};

class addBeneficiary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: '',
      description: '',
      name: ' ',
      errors: {
        heading: '',
        description: '',
        name: '',
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
      const newBeneficiary = {
        heading: this.state.heading,
        description: this.state.description,
        name: this.state.name,
        author: this.props.name,
      };
      this.props.postNgoBeneficiary(newBeneficiary);
    }
  }

  formValidation = () => {
    const { heading, description,name } = this.state;
    let headingError = ' ',
      descriptionError = ' ',
      nameError = '',
      error;
    if (!heading.trim()) {
      headingError = 'Heading is required';
      error = true;
    }
    if (!name.trim()) {
      nameError = 'Name is required';
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
          backgroundImage: `url(${blogFormBG})`,
          backgroundSize: 'cover',
          padding: '5% 10% 5% 10%',
        }}
      >
        <div className='forms__section'>
          <Container>
            <Col md={12} className='contact__main__content'>
              <Row>
                <Breadcrumb className='mb-6 page__navigation__breadCrump'>
                  <BreadcrumbItem>
                    <Link to='/home'>Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Add Beneficiary</BreadcrumbItem>
                </Breadcrumb>
              </Row>
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
                      <Form.Label>
                        <span className='form__icon'></span>Beneficiary Name
                      </Form.Label>
                      <input
                        name='name'
                        className='form-control'
                        type='text'
                        value={this.state.name}
                        placeholder='Write the beneficiary name.'
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
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addBeneficiary);
