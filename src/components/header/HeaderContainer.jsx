import React from 'react';
import { connect } from 'react-redux';
import Header from './Header.jsx';

const HeaderContainer = (props) => {

  return (
    <Header {...props} />
  );
};

const mapStateToProps = (state) => (
  {
    cities: state.cities,
  }
);

export default connect(mapStateToProps)(HeaderContainer);
