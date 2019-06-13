import React, { Component } from 'react';

class Com extends Component {
  constructor(props) {
    super(props);
    this.btnClickFun = this.btnClickFn.bind(this);
    console.log('1', this)
  }

  btnClickFn() {
    console.log('2', this)
  }


  render() {
    return (
      <div>
        <button onClick={this.btnClickFun.bind(this)}>react按钮</button>
      </div>
    )
  }
}
export default Com