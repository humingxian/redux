import React, { Component } from 'react';
import { VisibilityFilters, setVisibilityFilter } from '../../redux/actions'
import { connect } from 'react-redux'

class MyFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: ['all', 'active', 'completed']
    }
  }

  render() {

    return (
      <div> show :
        <button onClick={() => this.props.setVisibilityFilter(VisibilityFilters.SHOW_ALL)} style={{padding: '4px'}}>all</button>
        <button onClick={() => this.props.setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)} style={{padding: '4px'}}>active</button>
        <button onClick={() => this.props.setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)} style={{padding: '4px'}}>completed</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyFilter)