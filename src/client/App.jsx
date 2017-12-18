import React from 'react';
import Header from './components/Header.jsx';
import AppRouter from './components/AppRouter.jsx';
import Footer from './components/Footer.jsx';

export default class App extends React.Component{

  constructor(props){
    super(props);

  }

  render(){
    return (
      <div> 
        <Header/>
        <AppRouter/>
        <Footer/>
      </div>
    );
  }
};