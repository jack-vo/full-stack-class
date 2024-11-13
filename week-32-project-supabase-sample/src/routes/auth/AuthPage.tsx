import { Auth } from '@supabase/auth-ui-react';
import supabase from '../../utils/supabase.ts';
import { ThemeSupa, ViewType } from '@supabase/auth-ui-shared';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type AuthPageProps = {
    view: ViewType;
};

export function AuthPage(props: AuthPageProps) {
    const navigate = useNavigate();

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            console.log('session', session);

            if (session) {
                navigate('/');
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <div>
            <h1>Sign in / Sign up</h1>
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                view={props.view}
            />
        </div>
    );
}
