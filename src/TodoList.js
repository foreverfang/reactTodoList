import React, { Component } from 'react';
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
    this.setState({
      inputValue: e.target.value
    });
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
  }
  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list });
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
      <React.Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button className='red-btn' onClick={this.handleBtnClick}>add</button>
          <span>hello fang</span>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </React.Fragment>
    );
  }
}

export default TodoList;
