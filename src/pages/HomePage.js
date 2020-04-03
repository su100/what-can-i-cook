import React from 'react';
import PageTemplate from 'components/common/PageTemplate'
import HomeContainer from 'containers/HomeContainer'
import HeaderContainer from 'containers/HeaderContainer'

const HomePage = ({location}) => {
  return (
    <div> 
        <PageTemplate header={<HeaderContainer location={location}/>}>
            <HomeContainer/>
        </PageTemplate>
    </div>
  );
};

export default HomePage;
  