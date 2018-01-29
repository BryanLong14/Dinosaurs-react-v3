import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Jobdetails} from './components/Jobdetails';
import {InputForm} from './components/InputForm';
import {Preview} from './components/Preview';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        data: {}
      }
    }

componentDidMount() {
    fetch('./listing.json')
    .then(response => response.json())
    .then(response => {
      this.setState({
        data: response
      });
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <main>
        <Header />
        <Jobdetails listing={this.state.data} />
        <InputForm />
        <Preview />
        <Footer />
      </main>
    );
  }
}

export default App;
