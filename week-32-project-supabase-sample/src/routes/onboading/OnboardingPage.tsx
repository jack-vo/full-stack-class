import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../../utils/supabase.ts';
import { Session } from '@supabase/supabase-js';
import { Button, Card, Form, Input, notification } from 'antd';
import styles from './OnboardingPage.module.css';

type OnboardingFieldType = {
    firstname: string;
    lastname: string;
    email: string;
};

export function OnboardingPage() {
    const [session, setSession] = useState<Session | null>(null);
    const navigate = useNavigate();
    const initialValues = {
        firstname: '',
        lastname: '',
        email: session?.user.email || '',
    };
    const onFormFinish = (values: OnboardingFieldType) => {
        supabase
            .rpc('upsert_user', {
                user_id: session?.user.id,
                firstname: values.firstname,
                lastname: values.lastname,
                email: values.email,
            })
            .then(() => {
                notification.success({
                    message: 'User information updated',
                });
                navigate('/');
            });
    };

    useEffect(() => {
        // We still need to check if current user is authenticated or not
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);

            if (!session) {
                navigate('/sign-in');
            }
        });
    }, []);

    if (!session) {
        return <div>Loading ...</div>;
    }

    return (
        <div className={styles.container}>
            <Card className={styles.content} title="Onboarding">
                <Form
                    layout="vertical"
                    initialValues={initialValues}
                    onFinish={onFormFinish}
                >
                    <Form.Item<OnboardingFieldType>
                        name="firstname"
                        label="First name"
                        rules={[
                            {
                                required: true,
                                max: 100,
                                message: 'Please input your first name',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<OnboardingFieldType>
                        name="lastname"
                        label="Last name"
                        rules={[
                            {
                                required: true,
                                max: 100,
                                message: 'Please input your last name',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<OnboardingFieldType> name="email" label="Email">
                        <Input type="email" disabled />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}
