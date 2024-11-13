import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { AuthPage } from './routes/auth/AuthPage';
import { RootPage } from './routes/root/RootPage.tsx';
import { OnboardingPage } from './routes/onboading/OnboardingPage.tsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<RootPage />}></Route>
            <Route path="sign-in" element={<AuthPage view="sign_in" />}></Route>
            <Route path="sign-up" element={<AuthPage view="sign_up" />}></Route>
            <Route path="onboarding" element={<OnboardingPage />}></Route>
        </>,
    ),
);

export default router;
