import React from 'react';

import { Layout, Icon } from 'antd';

const { Header } = Layout;

/**
 * @todo create config file to construc dynamic routes and subroutes
 */
export default (props) => {
    let { collapsed, setCollapsed } = props
    return (
        <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={() => { setCollapsed(!collapsed) }}
                style={{ marginLeft: 20, fontSize: 18 }}
            />
        </Header>
    );
}
