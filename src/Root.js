import React, { Component } from 'react';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { News } from './components/news/News';
import { ArticleSingle } from './components/news/ArticleSingle/ArticleSingle';
import { Inquiry } from './components/inquiry/Inquiry';
import { Contact } from './components/contact/Contact';
import { SearchResult } from './components/SearchResult/SearchResult';
import { CourseItem } from './components/SearchResult/CourseItem/CourseItem';
import { Polices } from './components/Polices/Polices';
import { Profile } from './components/Profile/Profile';

import { NoMatch } from './NoMatch';

import { Header } from './components/common/header/Header';
import SideDrawer from './components/common/header/DrowerNavigation/SideDrawer';
import Backdrop from './components/common/header/Backdrop/Backdrop';
//import { Search } from './components/common/Search/Search';
import { Footer } from './components/common/footer/Footer';



class Root extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sideDrawerOpen: false,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  };

  backdropClickHandler = () => {

    this.setState({ sideDrawerOpen: false })
    this.eventPrevent()
  };

  eventPrevent () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (

        <React.Fragment >
          <Router >
            <header>
              <Header drawerClickHandler={this.drawerToggleClickHandler} prevent={this.eventPrevent}/>
            </header>
            {/*
            <div style={{position:"absolute", width: '100%', height: '100%'}}>
              <Search />
            </div>
            */}
            <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler} />
            {backdrop}
            <Switch>
              <Route  exact  path={process.env.PUBLIC_URL + "/"} component={Home} />
              <Route  path={process.env.PUBLIC_URL + "/about"} component={About} />
              <Route  path={process.env.PUBLIC_URL + "/news"} component={News} />
              <Route  path={process.env.PUBLIC_URL + "/articleSingle"} component={ArticleSingle} />
              <Route  path={process.env.PUBLIC_URL + "/inquiry"} component={Inquiry} />
              <Route  path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
              <Route  path={process.env.PUBLIC_URL + "/searchResult"} component={SearchResult} />
              <Route  path={process.env.PUBLIC_URL + "/courseItem"} component={CourseItem} />
              <Route  path={process.env.PUBLIC_URL + "/polices"} component={Polices} />
              <Route  path={process.env.PUBLIC_URL + "/profile"} component={Profile} />
              <Route component={NoMatch} />
            </Switch>
            <Footer prevent={this.eventPrevent}/>


          </Router >
        </React.Fragment>

    );
  }
}

export default Root;
