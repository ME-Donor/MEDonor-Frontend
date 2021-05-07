import React, { Component } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Table from 'react-bootstrap/Table';
import "./userList.css";
import {connect} from 'react-redux';

import { fetchUserLists } from '../../redux/actions/userlists';

const mapStateToProps = (state) => {
  return {
    userlists: state.userlists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserLists: () => dispatch(fetchUserLists())
  }
}

class userList extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      this.props.fetchUserLists();
    }

    renderUserlists = (userlists,key) => {
      return (
        
        <tr className="tblrow" key={key}>
                
                <td className="text-center">{userlists.name}</td>
                
                <td className="text-center">{userlists.address}</td>
                <td className="text-center last-col">
                <p>{userlists.contact}</p>
                </td>
                <td className="text-center">{userlists.role}</td>
                
              </tr>  
        
      )
    }
    render() {
      if(this.props.userlists.isLoading) {
        return <h1>Loading</h1>
      } else if(this.props.userlists.errMess) {
        return <h1>{this.props.userlists.errMess}</h1>
      }
      return (
          <div className="container ">
               <div className="about text-center">
          <h1>USERS</h1>
          </div>
         <br></br>
          <div className="body-text table-setting">
        <Table hover className="tablepad" >
        <thead>
          <tr className="tblrow">
            
            <th className="text-center table-heading theader">name</th>
            <th className="text-center table-heading theader">Address</th>
            <th className="text-center table-heading theader" >Contact</th>
            <th className="text-center table-heading theader">Role</th>
            
          </tr>
          
        </thead>
        <tbody>
            
        {this.props.userlists.userlists.map((item,key) =>
          this.renderUserlists(item,key)
           
          )}
          
        </tbody>
      </Table>
      </div>
      </div>

)
}
}
export default connect(mapStateToProps,mapDispatchToProps)(userList);