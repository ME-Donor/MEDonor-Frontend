import React, { Component } from 'react';
import './ngoBeneficiary.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import nbbg from '../../images/nbBGg.jpg'
import { fetchNgoBeneficiaries } from '../../redux/actions/ngobeneficiary';
import { Row, Col } from 'react-bootstrap';

const mapStateToProps = (state) => {
  return {
    ngobeneficiaries: state.ngobeneficiaries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNgoBeneficiaries: () => dispatch(fetchNgoBeneficiaries()),
  };
};

class NgoBeneficiaries extends Component {
  componentDidMount() {
    this.props.fetchNgoBeneficiaries();
  }

  renderNgoBeneficiaries = (ngobeneficiaries, key) => {
    return (
        
     
          <div className='list-setting column'style={{padding: "10px"}} key={key}>
            <ListGroup.Item className='list-style'>
              <p>{ngobeneficiaries.description} </p>

              <i className='b-name'>{ngobeneficiaries.name}</i>
              <p className='n-name'>{ngobeneficiaries.author.name}</p>
            </ListGroup.Item>
          </div>
      
        
    );
  };
  render() {
    if (this.props.ngobeneficiaries.isLoading) {
      return <h1>Loading</h1>;
    } else if (this.props.ngobeneficiaries.errMess) {
      return <h1>{this.props.ngobeneficiaries.errMess}</h1>;
    }
    return (
      <div
      style={{
        backgroundImage: `url(${nbbg})`,
        backgroundSize: 'cover',
        padding: '5% 10% 5% 10%',
        marginTop:'-20px',
       
      }}
    >
      
      <div className='coontainer'>
        <div className='title'>
          <h2 data-text='Ngo Beneficiary'>Ngo Beneficiaries <img src="https://www.cry.org/wp-content/themes/cry/images/streak.gif" className="streak-img streak-img-ds"/></h2>
         
        </div>
        <div>
        <p className="bene-desc"><i>Hear real stories from the people who have been benefited by the medicines you donate</i></p>
        </div>
        <hr className='sep-2' style={{width:"85%" , marginTop:"17px"}} />
        <div className='row'>
          <ListGroup>
          
          {this.props.ngobeneficiaries.ngobeneficiaries.map((item, key) =>
            this.renderNgoBeneficiaries(item, key)
          )}
        
          </ListGroup>
        </div>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NgoBeneficiaries);
