import { Badge, Button, Input, Layout, Menu, Popover } from 'antd';
import {
    DashboardOutlined,
    FileOutlined,
    SettingOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
import { DefaultLogo } from '../../components/Logo.jsx';
import './EditorRoot.css';

const { Header, Content, Sider, Footer } = Layout;
const menuItems = [
    {
        key: 'dashboard',
        label: <Link to="/editor">Dashboard</Link>,
        icon: <DashboardOutlined />,
    },
    {
        key: 'posts',
        label: <Link to="/editor/posts">Posts</Link>,
        icon: <FileOutlined />,
    },
];

function SettingMenu() {
    return (
        <Menu>
            <Menu.Item key="0">
                <Link to="#">Settings</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <Link to="/signout">Logout</Link>
            </Menu.Item>
        </Menu>
    );
}

// Antd Example I used https://ant.design/components/layout#layout-demo-responsive
export function EditorRoot() {
    return (
        <Layout className="editor-container">
            <Sider
                collapsible
                className="editor-sidebar"
                width="240"
                breakpoint="md"
            >
                <div className="editor-sidebar-logo-wrapper">
                    <DefaultLogo theme="dark" />
                </div>
                <Menu items={menuItems} />
            </Sider>
            <Layout className="editor-body">
                <Header className="editor-header">
                    <Input.Search
                        className="editor-header-search"
                        placeholder="Search..."
                    />
                    <div className="editor-header-menu">
                        <Badge count={5}>
                            <Button
                                ghost
                                shape="circle"
                                icon={<UserOutlined />}
                            />
                        </Badge>
                        <Popover content={<SettingMenu />} trigger="click">
                            <Button
                                ghost
                                shape="circle"
                                icon={<SettingOutlined />}
                            />
                        </Popover>
                    </div>
                </Header>
                <Content className="editor-content">
                    <Outlet />
                </Content>
                <Footer className="footer">Sample Blog Post project</Footer>
            </Layout>
        </Layout>
    );
}
