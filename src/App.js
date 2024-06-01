import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import HardSkills from './components/hardSkills';
import Projects from './components/projects';
import Footer from './components/footer';


class Body extends React.Component {
  render() {
    return (
      <div className='body'>
        <Header />
        <AboutMe />
        <HardSkills />
        <Projects />
        <Footer />
      </div>
    )
  }
}

export default Body