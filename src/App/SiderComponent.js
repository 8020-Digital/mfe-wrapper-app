import React from 'react';
import { Link } from 'react-router-dom'

import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;

/**
 * @todo create config file to construc dynamic routes and subroutes
 */
export default (props) => {
    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed} >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <SubMenu key="sub1" title={<span><Icon type="user" /><span>Browser</span></span>}>
                    <Menu.Item key="6"><Link to="/route1">Rota 1</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/route2">Rota 2</Link></Menu.Item>
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
    );
}
