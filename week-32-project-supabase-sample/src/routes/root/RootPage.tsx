import { Authenticated } from '../../components/Authenticated.tsx';
import { Alert, Button } from 'antd';
import supabase from '../../utils/supabase.ts';
import { useNavigate } from 'react-router-dom';
import styles from './Root.module.css';

export function RootPage() {
    const navigate = useNavigate();
    const signOut = async () => {
        await supabase.auth.signOut();

        navigate('/sign-in');
    };

    return (
        <Authenticated>
            <div className={styles.container}>
                <Alert message="You are inside a protected Root page" />
                <Button onClick={signOut} danger>
                    Sign me out
                </Button>
            </div>
        </Authenticated>
    );
}
