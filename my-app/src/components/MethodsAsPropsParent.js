import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'


export class MethodAsPropsParent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded: true,
       isLoggedIn: false
    }
  }  

  handleSignIn = () => {
    this.setState({
        isLoggedIn: true
    })
    console.log(this)
  }

  handleSignOut = () => {
    this.setState({
        isLoggedIn: false
    })
    console.log(this)
  }

  render() {
    return (
      <div>
          <MethodsAsPropsChild 
            isLoggedIn={this.state.isLoggedIn}
            handleSignIn={this.handleSignIn}
            handleSignOut={this.handleSignOut}
          />
      </div>
    )
  }
}

export default MethodAsPropsParent