/* eslint-disable jsx-a11y/anchor-is-valid */
import { Layout, Row, Col } from "antd";
import { Form, Input, Button, Select } from "antd";
import TopMenu from "./components/TopMenu/TopMenu.js";
import BlueTitle from "./components/BlueTitle.js";
import ShiChangTabs from "./components/ShiChangTabs";
import "./App.css";
import LineChart from "./components/LineChart";
import Table from "./components/Table/Table";
import DaPanpingji from "./components/DaPanpingji";

import { BrowserRouter as Router, Route, Link, Routes,useNavigate } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const { Option } = Select;
const usrDict=new Map();
usrDict.set("hu","2222")
const Home = () => {
    return (
        <div className="App">
            <Layout>
                <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                    <TopMenu curUsr={curUsr}/>
                </Header>
                <Content
                    className="site-layout"
                    style={{ padding: "0 50px", marginTop: 64 }}
                >
                    <div
                        className="site-layout-background"
                        style={{
                            marginTop: 50,
                            padding: 24,
                            minHeight: "100vh",
                        }}
                    >
                        <BlueTitle title="沪深市场" />
                        <Row gutter={16}>
                            <Col span="16">
                                <ShiChangTabs />
                            </Col>
                            <Col span="8">
                                <h2>大盘评级</h2>
                                <DaPanpingji />
                                <div style={{ textAlign: "center" }}>
                                    投资建议：
                                </div>
                                <br></br>
                                <div style={{ textAlign: "center" }}>
                                    大盘走势良好，积极参与
                                </div>
                            </Col>
                        </Row>
                        <LineChart />
                        <BlueTitle title="个股行情" />
                        <Table />
                        <BlueTitle title="友情链接" />
                        <br />
                        <br />
                        <Row gutter={16}>
                            <Col span="8">
                                <h3>频道咨询</h3>
                                <Row gutter={8}>
                                    <Col span="8">
                                        <a href="#">财经要闻</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">宏观经济</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">股票必读</a>
                                    </Col>
                                </Row>
                                <Row gutter={8}>
                                    <Col span="8">
                                        <a href="#">名家100</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">公司频道</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">市场频道</a>
                                    </Col>
                                </Row>
                                <Row gutter={8}>
                                    <Col span="8">
                                        <a href="#">股指期货</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">新股频道</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">国际财经</a>
                                    </Col>
                                </Row>
                                <Row gutter={8}>
                                    <Col span="8">
                                        <a href="#">创业板</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">新三板</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">图解财经</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span="8">
                                <h3>投资热点</h3>
                                <Row gutter={8}>
                                    <Col span="8">
                                        <a href="#">四大报刊</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">每日复盘</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">投资日历</a>
                                    </Col>
                                </Row>
                                <Row gutter={8}>
                                    <Col span="8">
                                        <a href="#">财报大全</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">早盘必读</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">互动平台</a>
                                    </Col>
                                </Row>
                                <Row gutter={8}>
                                    <Col span="8">
                                        <a href="#">牛叉诊股</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">交易提示</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">实时新闻</a>
                                    </Col>
                                </Row>
                                <Row gutter={8}>
                                    <Col span="8">
                                        <a href="#">限售解禁</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">新股日历</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">公告速递</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span="8">
                                <h3>数据精华</h3>
                                <Row gutter={8}>
                                    <Col span="8">
                                        <a href="#">龙湖榜单</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">大宗交易</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">融资融券</a>
                                    </Col>
                                </Row>
                                <Row gutter={8}>
                                    <Col span="8">
                                        <a href="#">业绩报告</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">个股资金</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">沪港通</a>
                                    </Col>
                                </Row>
                                <Row gutter={8}>
                                    <Col span="8">
                                        <a href="#">行业资金</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">新股预披</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">个股市盈率</a>
                                    </Col>
                                </Row>
                                <Row gutter={8}>
                                    <Col span="8">
                                        <a href="#">持续放量</a>
                                    </Col>
                                    <Col span="8">
                                        <a href="#">向上突破</a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    ©2021 海浪司行情中心
                </Footer>
            </Layout>
        </div>
    );
};
var curUsr =""
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Register = () => {
    const [form] = Form.useForm();

    const onGenderChange = (value) => {
        // eslint-disable-next-line default-case
        switch (value) {
            case "male":
                form.setFieldsValue({ note: "Hi, man!" });
                return;
            case "female":
                form.setFieldsValue({ note: "Hi, lady!" });
                return;
            case "other":
                form.setFieldsValue({ note: "Hi there!" });
        }
    };

    let history = useNavigate();

    function handleClick() {
        history("/");
    }
    const onFinish = (values) => {
        console.log(values);

        if (usrDict.get(values.account) === values.password ){
            curUsr = values.account
            handleClick();
        }
        else {
            alert("账号或者密码出错")
        }
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <>
        <h2>登录</h2>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item name="account" label="账号" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
            
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) =>
                    prevValues.gender !== currentValues.gender
                }
            >
                {({ getFieldValue }) =>
                    getFieldValue("gender") === "other" ? (
                        <Form.Item
                            name="customizeGender"
                            label="Customize Gender"
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                    ) : null
                }
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    重置
                </Button>
            </Form.Item>
        </Form>
        <Link to='/register1' id="regsiter1">注册</Link>
        </>
    );
};
const Register1 = () => {
    const [form] = Form.useForm();

    const onGenderChange = (value) => {
        // eslint-disable-next-line default-case
        switch (value) {
            case "male":
                form.setFieldsValue({ note: "Hi, man!" });
                return;
            case "female":
                form.setFieldsValue({ note: "Hi, lady!" });
                return;
            case "other":
                form.setFieldsValue({ note: "Hi there!" });
        }
    };

    let history = useNavigate();

    function handleClick() {
        history("/");
    }
    const onFinish = (values) => {
        usrDict.set(values.account, values.password);
        alert("创建成功")
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <>
        <h2>注册</h2>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item name="account" label="账号" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
            
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) =>
                    prevValues.gender !== currentValues.gender
                }
            >
                {({ getFieldValue }) =>
                    getFieldValue("gender") === "other" ? (
                        <Form.Item
                            name="customizeGender"
                            label="Customize Gender"
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                    ) : null
                }
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    重置
                </Button>
            </Form.Item>
        </Form>
        <Link to='/register' id="regsiter1">登录</Link>
        </>
    );
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home curUsr={curUsr} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register1" element={<Register1 />} />
            </Routes>
        </Router>
    );
}
// window.onunload=function(e){     
//     　　curUsr = ""
//     } 
export default App;
