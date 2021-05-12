import React, { Component } from 'react';
import './DonorSpeaks.css';
import { connect } from 'react-redux';
import { fetchDonorSpeaks, } from '../../redux/actions/donorspeaks';
import 'bootstrap/dist/css/bootstrap.min.css';
import admed from '../../images/n.jpg'
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
      <div className='collumn'style={{padding: "20px"}} key={key}>
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
      <div
      style={{
        backgroundImage: `url(${admed})`,
        backgroundSize: 'cover',
        padding: '5% 10% 15% 10%',
        marginTop:'-20px',
       
      }}
    >
      <div className='container'>
      <div className='title'>

      <h2 data-text='Donor Speaks'>DONOR SPEAKS <img src="https://www.cry.org/wp-content/themes/cry/images/streak.gif" className="streak-img streak-img-ds"/></h2>
        </div>
        <div>
      <p className="donor-desc"><i> If you’re looking for positive stories of change that will make your day, you’ve come to the right place! </i></p>   
        </div>

        <hr className='sep-2' style={{width:"85%" , marginTop:"-1px"}} />
        <div>
          {this.props.donorSpeaks.donorSpeaks.map((item, key) =>
            this.renderDonorSpeaks(item, key)
          )}
          {/* {this.renderDonorSpeaks(this.props.donorSpeaks)} */}
        </div>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonorSpeaks);
