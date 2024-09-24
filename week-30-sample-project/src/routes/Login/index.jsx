import { Tabs } from 'antd';
import { DefaultLogo } from '../../components/Logo.jsx';
import './Login.css';
import { LoginForm } from './LoginForm.jsx';
import { SignupForm } from './SignupForm.jsx';

const items = [
    {
        key: 'login',
        label: 'Login',
        children: <LoginForm />,
    },
    {
        key: 'signup',
        label: 'Sign up',
        children: <SignupForm />,
    },
];

export function Login() {
    return (
        <div className="auth-form">
            <div className="logo-wrapper">
                <DefaultLogo />
            </div>
            <Tabs defaultActiveKey="1" items={items} size="large" />
        </div>
    );
}
