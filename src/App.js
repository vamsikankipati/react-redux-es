import React from 'react';
//import './styles/style.less'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.focusName = this.focusName.bind(this);
    this.focusText = this.focusText.bind(this);
    
  }


componentWillMount() {
  console.log(this.props.message)
  console.log("component will mount")
}

componentWDidMount() {
  console.log("component did mount")
}

focusName() {
  //Explicitly focus the text input using raw DOM API
  this.refs.textInputName.focus();
}
focusText() {
  //Explicitly focus the text input using raw DOM API
  this.refs.textInputText.focus();
}


  render() { 
    return (
      <div>
        <center>
          <h1> Welcome to my react application </h1>
        <br/><br/><br/><br/><br/><br/>
  Name: <input type="text" ref="textInputName" /><br/><br/>
  Text : <input type="text" ref="textInputText" /><br/><br/>
        <input type="button" value="Focus the text input Name" onClick={this.focusName} /><br/><br/>
        <input type="button" value="Focus the text input Text" onClick={this.focusText} /><br/><br/>
        
        </center>
      </div>
    );
  }
}


export default App;