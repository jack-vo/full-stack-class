import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import Root from './routes/Root';
import About from './routes/About';
import Item1 from './routes/Item-1';
import Item2 from './routes/Item-2';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Root />}>
                <Route path="item-1" element={<Item1 />} />
                <Route path="item-2" element={<Item2 />} />
            </Route>
            <Route path="about" element={<About />} />
        </>,
    ),
);

export default router;
