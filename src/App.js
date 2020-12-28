import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import MealSection from './components/meals/MealSection';
import GetFloatButton from './components/buttons/GetFloatButton';
import Footer from './components/Footer';
import DATA from './data.js';
import './App.scss';

export class App extends Component {
  state = {
    fullList: true,
    data: DATA
  }

  updatedListStatus = () => {
    this.setState({
      fullList: !this.state.fullList
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <Nav fullList={this.state.fullList} updatedListStatus={this.updatedListStatus}/>
          <MealSection
            mealSections={this.state.data}
            fullList={this.state.fullList} />
          <GetFloatButton />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App

