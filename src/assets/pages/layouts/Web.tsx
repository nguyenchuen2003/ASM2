import { Outlet } from "react-router-dom"
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from "react-router-dom";
import "./Web.css"
const { Header, Content, Footer } = Layout;


const Web = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    // <div>
    //     <header>
    //       hedea
    //     </header>
    //       <Outlet />
    //     <footer>
    //       Footer
    //     </footer>
    // </div>
    <Layout className="layout">
      
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to={("/")}>  Home  </Link> </Breadcrumb.Item>
          <Breadcrumb.Item></Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
          <Breadcrumb.Item></Breadcrumb.Item>
         
           <Breadcrumb.Item>  <Link to={("sigin")}>  signin  </Link> </Breadcrumb.Item>
          <Breadcrumb.Item></Breadcrumb.Item>

          
          <Breadcrumb.Item> <Link to={("sigup")}>  signup  </Link> </Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          <div className="banner__container">
            <img src="https://lambanner.com/wp-content/uploads/2016/09/lambanner-thiet-ke-banner.jpg" alt="" />
          </div>
          <Outlet/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  )
}

export default Web




