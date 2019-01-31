import React, { Component } from 'react';

import AddTodo from './addTodo'
import List from './List'
import MyFilter from './MyFilter'

class TodoList extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div>
        <h1>todo</h1>
        <AddTodo />
        <List />
        <MyFilter />
      </div>
      
    )
  }
}

export default TodoList