import 'antd/dist/antd.css'
import React, { useState } from 'react';
import Routes from '../Routes'

import Sider from './SiderComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'

import { BrowserRouter as Router } from 'react-router-dom'

import { Layout } from 'antd';

const { Content } = Layout;

const App = () => {

  let [collapsed, setCollapsed] = useState(false)

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsed={collapsed} />
        <Layout>
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content><Routes /></Content>
          <Footer />
        </Layout>
      </Layout>
    </Router>
  );
}

export default App
