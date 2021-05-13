import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './blog_article.css';
import img1 from './img1.jpg';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import nbbg from './nbBGg.jpg';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Card,
  CardDeck,
  Form,
  Badge,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchNgoBlogById } from '../../redux/actions/ngoblogs';
import { useHistory } from 'react-router';

function BlogArticle({ blog, fetchNgoBlogById }) {
  const history = useHistory();

  useEffect(() => {
    fetchNgoBlogById(history.location.pathname.split('/')[2]);
  }, [fetchNgoBlogById, blog]);

  return (
    <div className='blog-article' style={{
      backgroundImage: `url(${nbbg})`,
      backgroundSize: 'cover',
      padding: '5% 10% 5% 10%',
      marginTop:'-20px',
    }}>
      <div style={{backgroundColor:"#fff"}}>
      <Jumbotron
        className='article-heading'
        style={{ backgroundColor: '#fff' }}
      >
        <Container className='article-heading-content' style={{textAlign: 'center'}}>
          <h3 
            className='article-heading-title'
            style={{ fontSize: '5rem', color: '#1c8a85' }}
          >
            {blog && blog.heading}
          </h3>
          <p>
            {' '}
            <span className='span-published-by'><i>Published by</i></span>{' '}
            <span className='span-publisher'>{blog && blog.author.name}</span>
          </p>
        </Container>
      </Jumbotron>
      <Container fluid='sm' className='blog-article-text' style={{textAlign: 'center'}}>
        <p style={{ fontSize: '1.7rem' }}>
          <img src={img1} className='blog-article-text-image' />
          <br />
          <br />
          {blog && blog.description}
        </p>
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
    </div>
  );
}

const mapStateToProps = (state) => ({
  blog: state.ngoblogs.ngoblog,
});

export default connect(mapStateToProps, { fetchNgoBlogById })(BlogArticle);
