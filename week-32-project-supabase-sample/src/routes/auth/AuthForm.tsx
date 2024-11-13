import { Button, Card, Form, FormProps, Input, Typography } from 'antd';
import styles from './AuthForm.module.css';
import { PropsWithChildren } from 'react';

export type AuthFieldType = {
    email?: string;
    password?: string;
};

type AuthFormProps = PropsWithChildren &
    Pick<FormProps, 'onFinish'> & {
        title: string;
    };

export function AuthForm(props: AuthFormProps) {
    return (
        <div className={styles.container}>
            <Typography.Title>{props.title}</Typography.Title>
            <Card className={styles.content}>
                <Form
                    layout="vertical"
                    onFinish={props.onFinish}
                    autoComplete="off"
                >
                    <Form.Item<AuthFieldType>
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                                type: 'email',
                            },
                        ]}
                    >
                        <Input type="email" />
                    </Form.Item>

                    <Form.Item<AuthFieldType>
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Sign in
                        </Button>
                    </Form.Item>
                </Form>
                {props.children}
            </Card>
        </div>
    );
}
