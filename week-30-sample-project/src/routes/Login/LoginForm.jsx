import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const initialValues = {
    username: 'test@gmail.com',
    password: '1234567890',
    remember: true,
};

export function LoginForm() {
    const navigate = useNavigate();
    const onFinish = () => {
        navigate('/editor', {
            replace: true,
        });
    };

    return (
        <Form
            layout="vertical"
            size="large"
            autoComplete="off"
            initialValues={initialValues}
            onFinish={onFinish}
        >
            <Form.Item
                label="Username / Email"
                name="username"
                rules={[
                    {
                        required: true,
                        type: 'email',
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input addonBefore={<UserOutlined />} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    { required: true, message: 'Please input your password!' },
                ]}
            >
                <Input.Password addonBefore={<LockOutlined />} />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" size="large">
                    Sign in
                </Button>
            </Form.Item>
        </Form>
    );
}
