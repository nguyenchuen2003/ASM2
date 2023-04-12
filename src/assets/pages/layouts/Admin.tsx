import { useNavigate, Outlet } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import "../../../style.css/herderAdmin.css"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;
// import React from 'react';
// import { Space, Table, Tag } from 'antd';
// import type { ColumnsType } from 'antd/es/table';


const Admin = () => {
  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  useEffect(() => {
    const user = localStorage.getItem("user");
    const role = JSON.parse(user).role;

    if (role != "admin") {
      navigate("/sigin");
    }
  });
  return (
    // <div>
    //   <aside>menu</aside>
    //   <main>
    //     <Outlet />
    //   </main>
    // </div>
    <Layout className="herder">
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'Trang Chủ',
          },
          // {
          //   key: '2',
          //   icon: <VideoCameraOutlined />,
          //   label: 'Thêm Sản Phẩm',

          // },
          // {
          //   key: '3',
          //   icon: <UploadOutlined />,
          //   label: 'nav 3',
          // },
        ]}
      />
    </Sider>
    <Layout className="site-layout">
      <Header style={{ padding: 0, background: colorBgContainer }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          
        }}
      >
             <Outlet />
      </Content>
    </Layout>
  </Layout>
  )
}

export default Admin