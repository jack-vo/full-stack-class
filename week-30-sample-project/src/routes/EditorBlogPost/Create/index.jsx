import { EditorBlogPostForm } from '../EditorBlogPostForm.jsx';
import { Divider, Typography } from 'antd';

export function CreateEditorBlogPost() {
    return (
        <div>
            <Typography.Title>Create Blog Post</Typography.Title>
            <Divider />
            <EditorBlogPostForm />
        </div>
    );
}
