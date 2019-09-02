
import React, { useState } from 'react';
import Routes from './Routes'

import { BrowserRouter as Router } from 'react-router-dom'

import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'

import { Layout, Menu, Icon } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const { SubMenu } = Menu;


const App = () => {

  let [collapsed, setCollapsed] = useState(false)

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Browser</span>
                </span>
              }
            >
              <Menu.Item key="6">
                <Link to="/route1">
                  Rota 1
              </Link>
              </Menu.Item>
              <Menu.Item key="4"><Link to="/route2">
                Rota 2
              </Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => { setCollapsed(!collapsed) }}
            />
          </Header>
          <Content><Routes /></Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App
