import { Authenticated } from '../../components/Authenticated.tsx';

export function RootPage() {
    return (
        <Authenticated>
            <div>
                <h1>Root page</h1>
            </div>
        </Authenticated>
    );
}
