import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Pagination } from 'antd'

export class Page extends React.Component<void, Props, void> {
  render () {
    return (
       <Pagination  defaultCurrent={1} total={100} />
    )
  }
}

const mapStateToProps = (state) => ({})
export default connect((mapStateToProps), {})(Page)
