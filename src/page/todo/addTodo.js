import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../../redux/actions'

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.changeIpt = this.changeIpt.bind(this)
  }

  changeIpt(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        if(!this.state.value.trim()) {
          return 
        } else {
          this.props.addTodo(this.state.value)
          this.setState({
            value: ''
          })
        }
      }}>
        <input style={{border: '1px solid #ccc'}} value={this.state.value} onChange={this.changeIpt} />
        <button>AddTodo</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)