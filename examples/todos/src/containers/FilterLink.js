import React from 'react';
import {connect} from 'react-redux';
import Link from '../components/Link';
import {setVisibilityFilter} from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick:()=>{
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(state,ownProps)
  return {
    active: ownProps.filter===state.visibilityFilter
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(Link)