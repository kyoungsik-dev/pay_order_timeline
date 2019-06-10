import React from 'react';
import './Header.scss';
import { setLanguage } from '../action/index'; // Redux - Action

import { connect } from 'react-redux';

const langInfo = {
  'ko': '한국어',
  'en': 'English'
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLangDropdown: false
    };
  }
  setLang = (langKey) => {
    this.setState({showLangDropdown: false});
    this.props.onClick(langKey);
  }
  render() {
    return (
      <div className="Header">
        <div className="Header-Left">
          NAVER PAY - HEADER
        </div>
        <div className="Header-Right">
          <span onClick={()=> {this.setState({showLangDropdown: !this.state.showLangDropdown})}}>
            {langInfo[this.props.selectedLang]}
          </span>
          <div className={`dropdown-menu ${this.state.showLangDropdown ? 'Header-showLangDropdown' : ''}`}>
            {Object.keys(langInfo).map(langKey => (
              <span className="dropdown-item" key={langKey} onClick={()=>this.setLang(langKey)}>
                {langInfo[langKey]}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const langStateToProps = (state) => {  
  return {
    selectedLang: state.langKey
  }
}

const langDispatchToProps = (dispatch) => {  
  return {
      onClick(data) {
        dispatch(setLanguage(data)) // 액션 메서드
      }
  }
}

export default connect(langStateToProps, langDispatchToProps)(Header);