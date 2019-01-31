import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleTodo } from '../../redux/actions'

class List extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <ul>
        {this.props.todos.map((item) => (
          <li key={item.id} onClick={() => this.props.toggleTodo(item.id)} style={{textDecoration: item.completed?'line-through':'none'}}>{item.text}</li>
        ))}
      </ul>
    )
  }
}

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(List)