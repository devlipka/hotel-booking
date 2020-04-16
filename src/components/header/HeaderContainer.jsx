import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Header from './Header.jsx';
import { changeLanguageAC } from '../../redux/header-reducer';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    );
  }
}

const mapStateToProps = state => (
  {
    cities: state.cities,
    language: state.headerReducer.language,
  }
);

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: language => {
      dispatch(changeLanguageAC(language));
      // console.log(22222222222222222222222222222222222222222222222222, language);
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(HeaderContainer);
