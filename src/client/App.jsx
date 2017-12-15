import React from 'react';
import NameInput from './components/NameInput.jsx';

export default class App extends React.Component{

  constructor(props){
    super(props);

  }

  render(){
    return (
      <div> 
        <NameInput initialName={this.props.initialName}/>  
      </div>
    );
  }
};