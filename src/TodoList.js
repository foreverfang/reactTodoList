import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // this.handleBtnClick = this.handleBtnClick.bind(this);
    this.state = {
      list: [],
      inputValue: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }
  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => {
      return {
        inputValue: value
      };
    });
  }
  handleBtnClick() {
    this.setState((preState) => {
      return {
        list: [...preState.list, preState.inputValue],
        inputValue: ''
      };
    });
  }
  handleDelete(index) {
    this.setState((preState) => {
      const list = [...preState.list];
      list.splice(index, 1);
      return { list };
    });
  }
  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            key={index}
            delete={this.handleDelete}
            content={item}
            index={index}
          />
        );
      })
    );
  }
  //父组件通过属性的形式向子组件传递参数
  //子组件通过props接收父组件传过来的参数
  render() {
    return (
      <Fragment>
        <div>
          <label>请输入</label>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button className='red-btn' onClick={this.handleBtnClick}>提交</button>
          <span>hello fang</span>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
