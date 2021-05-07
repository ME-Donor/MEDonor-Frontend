import React, { Component } from 'react';
import './medicinelist.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
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
              <Card.Title className='medi-name'>{medicines.name}</Card.Title>
              <br></br>
              <Card.Text>
                <p>
                  <i className='cdd-text'>Amount: </i>
                  {medicines.amount}
                </p>
                <p>
                  <i className='cdd-text'>Expiry: </i>
                  {medicines.expirydate}
                </p>
                <p>
                  <i className='cdd-text'>Donor: </i>
                  {medicines.author.name}
                </p>
                <p>
                  <i className='cdd-text'>Address: </i>
                  {medicines.author.address}
                </p>
              </Card.Text>
              <Button variant='outline-primary' className='btt-style'>
                Contact now
              </Button>{' '}
              {this.props.role === 'admin' ||
              this.props.userId === medicines.author._id ? (
                <Button
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
      <div>
        <div className='head text-center'>
          <h1>Medicines Available</h1>
        </div>

        <hr></hr>
        <br></br>

        <div className='containerr'>
          <Row>
            {this.props.medicines.medicines.map((item, key) =>
              this.renderMedicines(item, key)
            )}
          </Row>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(medlist);
