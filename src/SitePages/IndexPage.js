import React from 'react';
//Index.html imports
import Header from "../Components/Home/Header";
import IntroSection from '../Components/Home/Intro';
import Beyond from '../Components/Home/Beyond-Section';
import MusicAd from '../Components/Home/Music-ad';
import DrakeAd from '../Components/Home/Drake-ad';
import ContactAd from '../Components/Home/Contact-Ad';

function IndexPage() {
  return (
    <div>
      <Header />
      <IntroSection />
      <Beyond />
      <MusicAd />
      <DrakeAd />
      <ContactAd />
    </div>
  );
}


export default IndexPage;
