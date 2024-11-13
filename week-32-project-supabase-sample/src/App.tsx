import { RouterProvider } from 'react-router-dom';
import 'antd/dist/reset.css';
import router from './Router.jsx';

export default function App() {
    return <RouterProvider router={router} />;
}
