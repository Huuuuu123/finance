import { Menu } from 'antd';
import "./TopMenu.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
const routes = [
  {
      to: '/register',
      content: 'register'
  },
]

function TopMenu({curUsr}) {
  return (
    <div className="TopMenu" >
      <div className="logo" />
      <div style={{color:"white",fontWeight:"bold",display:"inline-block",marginRight:100,fontSize:15}}>海浪司行情中心</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{display:"inline-block"}}>
        <Menu.Item key="1">沪深市场</Menu.Item>
      </Menu>
        <Link to='/register' id="regsiter">{curUsr?curUsr:"登录/注册"}</Link>
      
    </div>
  );
}

export default TopMenu;
