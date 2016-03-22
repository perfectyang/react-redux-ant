/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Menu, Breadcrumb, Icon, Row, Col, Button } from 'antd'
import 'antd/lib/index.css'
import classes from './list.scss'
import Head from 'components/head/head'
import Footer from 'components/footer/footer'
import ContentList from 'components/contentList/contentList'
import Pagination from 'components/pagination/pagination'
import { getInitData } from 'redux/List/action'

const styles = {
  nav: {
    height: '50px',
    lineHeight: '50px',
    paddingLeft: '10px',
    backgroundColor: '#f6f6f6',
    borderRadius: '3px 3px 0 0'
  }
}

type Props = {
  getInitData : Function,
  List: Array
};
export class ListView extends React.Component<void, Props, void> {
  static propTypes = {
   getInitData: PropTypes.func.isRequired,
   List: PropTypes.array.isRequired
  }
  constructor (Props) {
    super(Props)
    this.props.getInitData({})
  }
  sorts = (srotTitle) => {
    this.props.getInitData({
      tab : srotTitle
    })
  }
  render () {
    console.log('thst;astg', this.props)
    const that = this
    const totalCount = this.props.List.allList.length
    return (
     <div>
        <Head /> 
          <div className={classes.main}>
            <Row>
              <Col span='14' offset='1'>
                <div className={classes.article}>
                  <div style={styles.nav}>
                    <Button style={{marginRight:'15px'}} onClick={function () {that.sorts('')}} type="ghost">全部</Button>
                    <Button style={{marginRight:'15px'}} onClick={function () {that.sorts('good')}} type="ghost">精货</Button>
                    <Button style={{marginRight:'15px'}} onClick={function () {that.sorts('share')}} type="ghost">分享</Button>
                    <Button style={{marginRight:'15px'}} onClick={function () {that.sorts('ask')}} type="ghost">问答</Button>
                    <Button style={{marginRight:'15px'}} onClick={function () {that.sorts('job')}} type="ghost">招聘</Button>
                  </div>
                  <ContentList  articleList={this.props.List.allList} />
                  <div style={{margin: 20}}>
                    <Pagination  selectPage={this.props.getInitData} totalCount={totalCount}/>
                  </div>
                </div>
              </Col>
              <Col span='6' offset='1'>
                <div className={classes.aside}>444</div>
              </Col>
            </Row>
          </div>
        <Footer />
     </div>
    )
  }
}

const mapStateToProps = (state) => ({
  List : state.List
})
export default connect((mapStateToProps), {
   getInitData
})(ListView)
