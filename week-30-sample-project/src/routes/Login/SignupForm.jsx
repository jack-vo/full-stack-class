import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

export function SignupForm() {
    return (
        <Form layout="vertical" size="large" autoComplete="off">
            <Form.Item
                label="Email"
                name="username"
                rules={[
                    {
                        required: true,
                        type: 'email',
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input addonBefore={<MailOutlined />} />
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

            <Form.Item>
                <Button type="primary" htmlType="submit" size="large">
                    Sign up
                </Button>
            </Form.Item>
        </Form>
    );
}
