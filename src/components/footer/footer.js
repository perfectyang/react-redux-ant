import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export class footer extends React.Component<void, Props, void> {
  render () {
    return (
      <div>
             版权所有-----perfectyang 
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})
export default connect((mapStateToProps), {})(footer)
