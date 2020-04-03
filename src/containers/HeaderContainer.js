import React, { Component } from 'react'; 
import Header from 'components/common/Header';

class HeaderContainer extends Component {
   
  render() { 
    return (  
      <Header location={this.props.location}/>
    );
  }
}

export default HeaderContainer;
