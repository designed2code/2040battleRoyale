import { React } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import Footer from './components/Footer/Footer.jsx'
import CratesPage from './components/CratesPage/CratesPage.jsx'
import ContactPage from './components/ContactPage/ContactPage.jsx'
import AboutPage from './components/AboutPage/AboutPage.jsx'
import NotMatch from './components/NotMatch/NotMatch.jsx'

function App() {


  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path="/2040battleRoyale" component={HomePage} />
          <Route path="/2040battleRoyale/about" component={AboutPage} />
          <Route path="/2040battleRoyale/crates" component={CratesPage}/>
          <Route path="/2040battleRoyale/contact" component={ContactPage}/>
          <Route path="*" component={NotMatch}/>
      </Switch>
      <Footer />
  </>
  );
}

export default App;
