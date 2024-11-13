import supabase from '../../utils/supabase.ts';
import { AuthForm, AuthFieldType } from './AuthForm.tsx';
import { notification, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

export function SignInPage() {
    const navigate = useNavigate();
    const onFinish = async (values: AuthFieldType) => {
        const { error } = await supabase.auth.signInWithPassword({
            email: values.email!,
            password: values.password!,
        });

        if (error) {
            notification.error({
                message: error.message,
            });
        } else {
            notification.success({
                message: 'Sign in successfully!',
            });
            navigate('/');
        }
    };

    return (
        <AuthForm onFinish={onFinish} title="Sign In">
            <Typography.Paragraph>
                New user? <Link to="/sign-up">Create a new account</Link>
            </Typography.Paragraph>
        </AuthForm>
    );
}
