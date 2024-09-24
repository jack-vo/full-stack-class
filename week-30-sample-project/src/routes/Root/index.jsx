import { FloatButton, Layout } from 'antd';
import { DefaultLogo } from '../../components/Logo.jsx';
import './Root.css';
import { Outlet } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
import { SidebarPosts } from './SidebarPosts.jsx';

const { Header, Content, Sider, Footer } = Layout;

// Antd Example I used https://ant.design/components/layout#layout-demo-responsive
export function Root() {
    return (
        <Layout className="container">
            <Header className="header">
                <div>
                    <DefaultLogo />
                </div>
            </Header>
            <Layout className="content">
                <Content>
                    <Outlet />
                </Content>
                <Sider
                    className="sidebar"
                    width="20%"
                    breakpoint="md"
                    collapsedWidth="0"
                    trigger={null}
                >
                    <SidebarPosts />
                </Sider>
            </Layout>
            <Footer className="footer">Sample Blog Post project</Footer>
            <FloatButton
                icon={<EditOutlined />}
                type="default"
                tooltip="Editor login"
                href="/login"
            />
        </Layout>
    );
}
