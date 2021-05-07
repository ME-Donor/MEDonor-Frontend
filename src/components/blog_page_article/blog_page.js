import React, { Component, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './blog_page.css';
import img1 from './pic.png';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import { connect } from 'react-redux';
import { fetchNgoBlogs } from '../../redux/actions/ngoblogs';
import {
  Image,
  Container,
  Button,
  Row,
  Col,
  Card,
  Jumbotron,
} from 'react-bootstrap';
import { useHistory } from 'react-router';

const mapStateToProps = (state) => {
  return {
    ngoBlogs: state.ngoblogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNgoBlogs: () => dispatch(fetchNgoBlogs()),
  };
};

const Blog = ({ fetchNgoBlogs, ngoBlogs }) => {
  const history = useHistory();

  useEffect(() => {
    fetchNgoBlogs();
  }, [fetchNgoBlogs]);

  const renderNgoBlogs = (ngoBlogs, key) => {
    return (
      <Row className='article-card' key={key}>
        <div>
          <Image src={img1} className='article-card-image' />
        </div>
        <div>
          <Card.Body>
            <Card.Title
              className=' card-title weight'
              style={{ fontSize: '1.9rem' }}
            >
              {ngoBlogs.heading}
            </Card.Title>
            <Card.Text className='card-title-desc'>
              {ngoBlogs.author.name} | {" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(ngoBlogs.createdAt)))}
            </Card.Text>
            <Button
              onClick={() => {
                history.push(`/blog/${ngoBlogs._id}`);
              }}
              variant='light'
              size='sm'
              className='read-more-btn'
            >
              Read more
            </Button>
          </Card.Body>
        </div>
      </Row>
    );
  };

  console.log('isLoading!', ngoBlogs);
  if (ngoBlogs.isLoading) {
    return <h1>Loading</h1>;
  } else if (ngoBlogs.errMess) {
    return <h1>{ngoBlogs.errMess}</h1>;
  }

  return (
    <div className='blogpage'>
      <Jumbotron
        fluid
        className='blog-title-main'
        style={{ backgroundColor: '#fff' }}
      >
        <Container>
          <p style={{ fontSize: '6rem' }} className='blog-title edit-1'>
            MEDBLOG{' '}
            <img
              src='https://www.cry.org/wp-content/themes/cry/images/streak.gif'
              className='streak-img'
            />
          </p>
          <p style={{ fontSize: '3.5rem' }} className='blog-title-byline'>
            Amazing people. Amazing stories
          </p>
          <p style={{ fontSize: '2rem' }} className='blog-title-byline-by'>
            If you’re looking for positive stories of change that will make your
            day, you’ve come to the right place!{' '}
          </p>
        </Container>
      </Jumbotron>

      <Container className='blog-posts'>
        <Row className='row-of-article '>
          <Col className='left-col'>
            <h2 className='hr-line'>
              <span className='hr-line-content'>LATEST POSTS</span>
            </h2>
            <div classname='row'>
              {ngoBlogs.ngoblogs.map((item, key) => renderNgoBlogs(item, key))}
            </div>
          </Col>

          <Col xs lg='4' className='right-col'>
            <Card.Body className='right-col-card'>
              <Card.Title
                className=' card-title-right'
                style={{ fontSize: '1.7rem' }}
              >
                About Us
              </Card.Title>
              <hr className='hr-right' />
              <Card.Text className='card-title-desc-right'>
                With your support, we address people's critical needs of
                medication by working with NGOs and various communities,
                district and state level governments as well as the patients
                themselves. We focus on supplying medication and influencing
                public to stop medicine destruction at all levels.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>

      <Jumbotron className='note-jumbo' style={{ backgroundColor: '#DAF1F0' }}>
        <Container>
          <Row>
            <Col>
              <Card body border='light' className='note-card'>
                <Row className='small-note-content'>
                  <Col classname='note-sub-col'>
                    <p>
                      <img src={pic1} className='small-note-image' />
                    </p>
                  </Col>
                  <Col md='auto'>
                    <p className='small-note' style={{ fontSize: '1.3rem' }}>
                      {' '}
                      All our efforts are made possible only because of your
                      support
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card body border='light' className='note-card'>
                <Row className='small-note-content'>
                  <Col classname='note-sub-col'>
                    <p>
                      <img src={pic2} className='small-note-image' />
                    </p>
                  </Col>
                  <Col md='auto'>
                    <p className='small-note' style={{ fontSize: '1.3rem' }}>
                      {' '}
                      Your donations are tax exempted under 80G of the Indian
                      Income Tax Act
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card body border='light' className='note-card'>
                <Row className='small-note-content'>
                  <Col classname='note-sub-col'>
                    <p>
                      <img src={pic3} className='small-note-image' />
                    </p>
                  </Col>
                  <Col md='auto'>
                    <p className='small-note' style={{ fontSize: '1.3rem' }}>
                      {' '}
                      Your donation transactions are completely safe and secure
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
