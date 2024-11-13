import { PropsWithChildren, useEffect, useState } from 'react';
import supabase from '../utils/supabase.ts';
import { Session } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

let isLoadingUserInfo = false;
const authenticatedUserInfo = {
    user: null,
};

type AuthenticatedProps = PropsWithChildren & {
    redirectTo?: string;
};

export function Authenticated(props: AuthenticatedProps) {
    const { redirectTo } = props;
    const [session, setSession] = useState<Session | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);

            if (session) {
                // check if we have load the user information or not
                // if not let's load the user info
                if (!authenticatedUserInfo.user && !isLoadingUserInfo) {
                    isLoadingUserInfo = true;

                    // Load user information
                    const userId = session.user.id;

                    try {
                        supabase
                            .rpc('get_user', {
                                user_id: userId,
                            })
                            .then(({ data }) => {
                                console.log(data);

                                isLoadingUserInfo = false;
                                authenticatedUserInfo.user = data;

                                if (!authenticatedUserInfo.user) {
                                    // User info is not found
                                    // Let's redirect them to the onboarding page
                                    navigate('/onboarding');
                                }
                            });
                    } catch (error) {
                        console.log(error);
                    }
                }
            } else {
                authenticatedUserInfo.user = null;

                // User has logged out
                // Let's redirect them to the Login page if redirectTo is NOT set
                navigate(redirectTo || '/sign-in');
            }
        });

        return () => subscription.unsubscribe();
    }, [session, isLoadingUserInfo]);

    if (!session) {
        return <div>Unauthorized - redirecting...</div>;
    }

    if (isLoadingUserInfo) {
        return <div>Loading...</div>;
    }

    return props.children;
}
