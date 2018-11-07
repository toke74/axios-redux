import React from 'react';

export default class Toggle extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {isToggleOn: true};
  
    //   // This binding is necessary to make `this` work in the callback
    //   this.handleClick = this.handleClick.bind(this);
    // }
  
    // handleClick() {
    //   this.setState(state => ({
    //     isToggleOn: !state.isToggleOn
    //   }));
    // }

    // state = {
    //     isToggleOn: false
    // };

    // handleClick =() =>{
    //     this.setState({
    //         isToggleOn: !this.state.isToggleOn
    //     })
    // }

    handleClick = () => {
      console.log('this is:', this);
    }
  
    render() {
      return (
        <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
      );
    }
  }