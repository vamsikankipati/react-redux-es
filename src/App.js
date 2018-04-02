import React from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
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

state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>

      <Menu size='massive'>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Item name='javascript' active={activeItem === 'javascript'} onClick={this.handleItemClick} />
              <Menu.Item name='react' active={activeItem === 'react'} onClick={this.handleItemClick} />
              <Menu.Item name='redux' active={activeItem === 'redux'} onClick={this.handleItemClick} />
              <Menu.Item name='angular' active={activeItem === 'angular'} onClick={this.handleItemClick} />

              <Menu.Menu position='right'>
                <Dropdown item text='Language'>
                  <Dropdown.Menu>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>Russian</Dropdown.Item>
                    <Dropdown.Item>Spanish</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Menu.Item>
                  <Button primary>Sign Up</Button>
                </Menu.Item>
              </Menu.Menu>
            </Menu>

      </div>
    );
  }
}


export default App;
