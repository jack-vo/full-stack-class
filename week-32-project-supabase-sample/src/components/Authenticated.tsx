import { PropsWithChildren, useEffect, useState } from 'react';
import supabase from '../utils/supabase.ts';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';

const authenticatedUserInfo = {
    user: null,
};

type AuthenticatedProps = PropsWithChildren & {
    redirectTo?: string;
};

export async function signOutCurrentUser() {
    authenticatedUserInfo.user = null;
    await supabase.auth.signOut();
}

export function validateUserRecord(userId: string) {
    return new Promise((resolve) => {
        if (authenticatedUserInfo.user) {
            resolve(authenticatedUserInfo.user);
        }

        // check if we have load the user information or not
        // if not let's load the user info
        if (!authenticatedUserInfo.user) {
            // Load user information
            supabase
                .rpc('get_user', {
                    user_id: userId,
                })
                .then(({ data }) => {
                    console.log(data);

                    authenticatedUserInfo.user = data;
                    resolve(authenticatedUserInfo.user);
                });
        }
    });
}

export function Authenticated(props: AuthenticatedProps) {
    const { redirectTo } = props;
    const [validUser, setValidUser] = useState(false);
    const [loadingUserInfo, setLoadingUserInfo] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setValidUser(!!session?.user);

            if (session) {
                if (!loadingUserInfo) {
                    validateUserRecord(session.user.id).then((user) => {
                        // User info is not found
                        // Let's redirect them to the onboarding page
                        if (!user) {
                            navigate('/onboarding');
                        }
                        setLoadingUserInfo(false);
                    });
                    setLoadingUserInfo(true);
                }
            } else {
                authenticatedUserInfo.user = null;

                // User has logged out
                // Let's redirect them to the Login page if redirectTo is NOT set
                navigate(redirectTo || '/sign-in');
            }
        });

        return () => subscription.unsubscribe();
    }, [validUser, loadingUserInfo]);

    if (!validUser) {
        return <div>Unauthorized - redirecting...</div>;
    }

    if (loadingUserInfo) {
        return <Spin spinning fullscreen />;
    }

    return props.children;
}
