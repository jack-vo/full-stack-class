import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { RootPage } from './routes/root/RootPage.tsx';
import { OnboardingPage } from './routes/onboading/OnboardingPage.tsx';
import { SignInPage } from './routes/auth/SignIn';
import { SignUpPage } from './routes/auth/SignUp';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<RootPage />}></Route>
            <Route path="sign-in" element={<SignInPage />}></Route>
            <Route path="sign-up" element={<SignUpPage />}></Route>
            <Route path="onboarding" element={<OnboardingPage />}></Route>
        </>,
    ),
);

export default router;
