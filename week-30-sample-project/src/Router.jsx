import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { Root } from './routes/Root';
import { RootContent } from './routes/Root/RootContent';
import { BlogPost } from './routes/BlogPost';
import { Login } from './routes/Login';
import { EditorRoot } from './routes/EditorRoot';
import { EditorDashboard } from './routes/EditorRoot/EditorDashboard';
import { EditorBlogPostList } from './routes/EditorBlogPost/List';
import { EditEditorBlogPost } from './routes/EditorBlogPost/Edit';
import { CreateEditorBlogPost } from './routes/EditorBlogPost/Create';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="" element={<Root />}>
                <Route index element={<RootContent />}></Route>
                <Route path="posts/:id" element={<BlogPost />}></Route>
            </Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="editor" element={<EditorRoot />}>
                <Route index element={<EditorDashboard />}></Route>
                <Route path="posts" element={<EditorBlogPostList />}></Route>
                <Route
                    path="posts/create"
                    element={<CreateEditorBlogPost />}
                ></Route>
                <Route
                    path="posts/edit/:id"
                    element={<EditEditorBlogPost />}
                ></Route>
            </Route>
        </>,
    ),
    {
        basename: '/full-stack-class/week-30-sample-project/dist',
    },
);

debugger;

export default router;
