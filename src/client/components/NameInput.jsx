import React from 'react';

export default class NameInput extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      name: props.initialName || ''
    };
  }

  onInputChange = (e) => {
    const name = e.target.value;
    this.setState({
      name: name
    });
  }
  
  render() {
    return (
      <div>
        <input type="text" onChange={this.onInputChange}
          value={this.state.name} />        
        <p>{this.state.name}</p>
      </div>
    );
  }
}

