import React, { Component } from 'react';
import './medicinelist.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import admed from '../../images/n.jpg';
import { fetchMedicines, deleteMedicine } from '../../redux/actions/medicines';

const mapStateToProps = (state) => {
  return {
    medicines: state.medicines,
    role: state.user.role,
    token: state.user.token,
    userId: state.user._id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMedicines: () => dispatch(fetchMedicines()),
    deleteMedicine: (medicineId) => dispatch(deleteMedicine(medicineId)),
  };
};

class medlist extends Component {
  componentDidMount() {
    this.props.fetchMedicines();
    
  }

  renderMedicines = (medicines, key) => {
    return (
      
      <div>
        <Col md={4} key={key}>
          <Card className='cdd-style bkg-im'>
            <Card.Body>
              <Card.Title ><b className='medi-nme'>{medicines.name}</b></Card.Title>
              <br></br>
              <Card.Text>
                <p className='cdd-text'>
                  <i>Amount: </i>
                  {medicines.amount}
                </p>
                <p  className='cdd-text'>
                  <i>Expiry: </i>
                  {medicines.expirydate}
                </p>
                <p  className='cdd-text'>
                  <i>Donor: </i>
                  {medicines.author.name}
                </p>
                <p  className='cdd-text'>
                  <i>Address: </i>
                  {medicines.author.address}
                </p>
                <p  className='cdd-text'>
                  <i>Contact: </i>
                  {medicines.author.contact}
                </p>
              </Card.Text>
   
              {this.props.role === 'admin' ||
              this.props.userId === medicines.author._id ? (
                <Button className="dd"
                  color='danger'
                  onClick={() => this.props.deleteMedicine(medicines._id)}
                >
                  <span className='fa fa-lg fa-trash'></span>
                </Button>
              ) : (
                <></>
              )}
            </Card.Body>
          </Card>
        </Col>
      </div>
      
    );
  };

  render() {
   
    if (this.props.medicines.isLoading) {
      return <h1>Loading</h1>;
    } else if (this.props.medicines.errMess) {
      return <h1>{this.props.medicines.errMess}</h1>;
    }
    return (
      <div
      style={{
        backgroundImage: `url(${admed})`,
        backgroundSize: 'cover',
        padding: '5% 10% 5% 10%',
        marginTop:'-20px',
       
      }}
    >
     
      <div>
        <div className='head text-center'>
          <h1>Medicines Available  <img src="https://www.cry.org/wp-content/themes/cry/images/streak.gif" className="streak-img streak-img-ds"/></h1>
        </div>
        <hr className='sep-2' style={{width:"85%" , marginTop:"11px"}} />
       
        <br></br>

        <div className='containerr'>
          <Row>
            {this.props.medicines.medicines.map((item, key) =>
              this.renderMedicines(item, key)
            )}
          </Row>
        </div>
      </div>
      </div>
     
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(medlist);
