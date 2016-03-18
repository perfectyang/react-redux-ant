import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Menu, Row, Col } from 'antd' 
export class List extends React.Component<void, Props, void> {
  render () {
    return (
      <div className="ant-layout-header">
        <div className="ant-layout-wrapper">
        <Row style={{background:'#444444'}}>
          <Col span='14' offset='1'>
            <div>logo</div>
          </Col>
          <Col span='6' offset='1'>
            <Menu theme="dark" mode="horizontal"
            defaultSelectedKeys={['2']} style={{lineHeight: '64px'}}>
            <Menu.Item key="1"><Link to='/list'>首页</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/begin'>新手入门</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/about'>关于</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/register'>注册</Link></Menu.Item>
            <Menu.Item key="5"><Link to='/login'>登录</Link></Menu.Item>
          </Menu>
          </Col>
        </Row>

          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})
export default connect((mapStateToProps), {})(List)
