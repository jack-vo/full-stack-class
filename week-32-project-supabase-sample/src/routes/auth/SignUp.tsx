import supabase from '../../utils/supabase.ts';
import { AuthForm, AuthFieldType } from './AuthForm.tsx';
import { notification, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

export function SignUpPage() {
    const navigate = useNavigate();
    const onFinish = async (values: AuthFieldType) => {
        const { error } = await supabase.auth.signUp({
            email: values.email!,
            password: values.password!,
        });

        if (error) {
            notification.error({
                message: error.message,
            });
        } else {
            notification.success({
                message: 'Sign up successfully!',
            });
            navigate('/sign-in');
        }
    };

    return (
        <AuthForm onFinish={onFinish} title="Sign Up">
            <Typography.Paragraph>
                Already have an account?{' '}
                <Link to="/sign-in">Let's sign in!</Link>
            </Typography.Paragraph>
        </AuthForm>
    );
}
