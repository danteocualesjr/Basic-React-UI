import React from 'react';

import Header from './Components/Header/header';
import BannerImage from './Components/BannerImage/bannerImage';
import BannerFooter from './Components/BannerFooter/bannerFooter';
import Icons from './Components/Icons/icons';

// import logo from './logo.svg';
// import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <BannerImage />
      <BannerFooter />
      <Icons />
    </div>
  )
}

export default App;
