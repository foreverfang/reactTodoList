import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    //子组件向父组件传值，子组件要调用父组件传过来的方法来通信
    handleDelete() {
        this.props.delete(this.props.index);
    }
    render() {
        const { content } = this.props;
        return (
            <div onClick={this.handleDelete}>{content}</div>
        );
    }
}

export default TodoItem;