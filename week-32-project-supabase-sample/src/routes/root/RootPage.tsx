import {
    Authenticated,
    signOutCurrentUser,
} from '../../components/Authenticated.tsx';
import { Alert, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './Root.module.css';

export function RootPage() {
    const navigate = useNavigate();
    const onSignOutClick = async () => {
        await signOutCurrentUser();

        navigate('/sign-in');
    };

    return (
        <Authenticated>
            <div className={styles.container}>
                <Alert message="You are inside a protected Root page" />
                <Button onClick={onSignOutClick} danger>
                    Sign me out
                </Button>
            </div>
        </Authenticated>
    );
}
