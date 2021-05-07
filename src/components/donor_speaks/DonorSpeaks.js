import React, { Component } from 'react';
import './DonorSpeaks.css';
import { connect } from 'react-redux';
import { fetchDonorSpeaks, } from '../../redux/actions/donorspeaks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron , Container , Row , Col , Button} from 'react-bootstrap'

const mapStateToProps = (state) => {
  return {
    donorSpeaks: state.donorspeaks,
    role:state.user.role,
    token:state.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDonorSpeaks: () => dispatch(fetchDonorSpeaks()),
    
  };
};

class DonorSpeaks extends Component {
  componentDidMount() {
    this.props.fetchDonorSpeaks();
  }

  renderDonorSpeaks = (donorSpeaks, key) => {
    return (
      <div>
      <div className='column'style={{padding: "20px"}} key={key}>
        <div className='card-ds'>
          <p>{donorSpeaks.description}</p>
          <p className='donorName'>{donorSpeaks.author.name}</p>
         
        </div>
      </div>
      </div>
    );
  };
  render() {
    if (this.props.donorSpeaks.isLoading) {
      return <h1>Loading</h1>;
    } else if (this.props.donorSpeaks.errMess) {
      return <h1>{this.props.donorSpeaks.errMess}</h1>;
    }

    return (
      <div className='container'>
        <Jumbotron fluid className="blog-title-main" style={{backgroundColor: '#fff' , marginTop:"-40px"}}>
          <Container>
              <p style={{fontSize: '5.5rem'}} className="blog-title edit-1 edit-2">DONOR SPEAKS <img src="https://www.cry.org/wp-content/themes/cry/images/streak.gif" className="streak-img streak-img-ds"/></p> 
              <p style={{fontSize: '2rem'}} className="blog-title-byline-by">If you’re looking for positive stories of change that will make your day, you’ve come to the right place! </p>
          </Container>
        </Jumbotron>
        <hr className='sep-2' style={{width:"85%" , marginTop:"-30px"}} />
        <div>
          {this.props.donorSpeaks.donorSpeaks.map((item, key) =>
            this.renderDonorSpeaks(item, key)
          )}
          {/* {this.renderDonorSpeaks(this.props.donorSpeaks)} */}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonorSpeaks);
