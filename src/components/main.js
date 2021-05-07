import React from 'react';
import { Route, Router, Switch, Redirect, withRouter } from 'react-router-dom';
import history from '../history';
import Header from './header_footer/Navbar';
import Footer from './header_footer/footer';
import Addblogs from './forms/addblog';
import Addmedicines from './forms/addmedicine';
import home from './home_page/home';
//import Blog from './blog_page_article/blog_page';
import about from './about/about';
import addDonorSpeak from './forms/adddonorspeaks';
import { connect } from 'react-redux';
import userlist from './userList/userList';
import medicinelist from './medicinesList/medicinelist';
import DonorSpeaks from './donor_speaks/DonorSpeaks';
import ngoBeneficiary from './ngo_beneficiary/ngoBeneficiary';
import addNgoBlog from './forms/addblog';
import Login from './Login_signup/Login';
import Signup from './Login_signup/Signup';
import Error from './Login_signup/Error';
import blog from './blog_page_article/blog_page';
import BlogArticle from './blog_page_article/blog_article';
import WTH from './waystohelp/wth';

import './main.css';
import { ADD_MEDICINE } from '../redux/ActionTypes';
import addBeneficiary from './forms/addngobeneficiary';

const Main = (props) => {
  let routes = null;
  if (props.role === null) {
    routes = (
      <Switch>
        <Route path='/' exact component={home} />
        <Route path='/about' exact component={about} />
        <Route path='/wth' exact component={WTH} />
        <Route path='/Error' exact component={Error} />
        <Route path='/Login' exact component={Login} />
        <Route path='/Signup' exact component={Signup} />
        <Redirect to='/' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/' exact component={home} />
        <Route path='/about' exact component={about} />
        <Route path='/wth' exact component={WTH} />
        <Route path='/Error' exact component={Error} />
        <Route path='/donorspeaks' exact component={DonorSpeaks} />
        <Route path='/ngoBeneficiary' exact component={ngoBeneficiary} />
        <Route path='/medicinelist' exact component={medicinelist} />
        <Route path='/userslist' exact component={userlist}></Route>
        <Route path='/blog' exact component={blog} />
        <Route exact path='/blog/:blogId' exact component={BlogArticle} />
        
        
        {props.role === 'ngo' && (
          <Route path='/addblog' exact component={Addblogs}  />
        )}
        {props.role === 'ngo' && (
          <Route path='/addbeneficiary' exact component={addBeneficiary} />
        )}
        {props.role === 'donor' && (
          <Route path='/adddonorSpeak' exact component={addDonorSpeak} />
        )}
        {props.role === 'donor' && (
          <Route path='/addmedicine' exact component={Addmedicines} />
        )}
        {props.role === 'admin' && (
          <Route path='/userslist' exact component={userlist}></Route>
        )

        }
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Header />
        {routes}
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    role: state.user.role,
  };
};

export default connect(mapStateToProps)(Main);
