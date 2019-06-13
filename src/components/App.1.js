import React, { Component } from 'react';

class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          brand: '康师傅',
          data: ['老坛酸菜牛肉面', '红烧牛肉面', '水煮鱼']
        },
        {
          brand: '康师傅',
          data: ['老坛酸菜牛肉面', '红烧牛肉面', '水煮鱼']
        }
      ]
    }
  }
  render() {
    let arr = [];
    this.state.list.map((item, index) => {
      let itemArr = [];
      item.data.map((itm, idx) => {
        itemArr.push(<li key={idx}>{itm}</li>)
      })
      let oLi = <li key={index}>{item.brand}<ul>{itemArr}</ul></li>;
      arr.push(oLi)
    })
    return (
      <ul>
        {arr}
      </ul>
    )
  }
}
export default Com
