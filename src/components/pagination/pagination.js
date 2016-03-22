import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Pagination } from 'antd'
type Props = {
  selectPage: Function,
  totalCount: Number
};
export class Page extends React.Component<void, Props, void> {
  static propTypes = {
    selectPage: PropTypes.func.isRequired,
    totalCount: PropTypes.number.isRequired
  }
  clickPage = (index) => {
    this.props.selectPage({
      page: index
    })
    console.log('index', index)
  }
  render () {
    console.log('pageaga', this.props)
    return (
      <Pagination onChange={this.clickPage} defaultCurrent={1} total={this.props.totalCount} />
    )
  }
}

const mapStateToProps = (state) => ({})
export default connect((mapStateToProps), {})(Page)
