import { EditorBlogPostForm } from '../EditorBlogPostForm.jsx';
import { Divider, Typography } from 'antd';

const post = {
    id: '001',
    title: 'The best hotel in Budapest',
    tags: ['Budapest', 'Hotel'],
    description:
        'Nulla fermentum vulputate tempus. Curabitur pharetra nulla augue, vel sollicitudin sem pulvinar sed. Donec mollis non mauris non suscipit. Praesent eu eros vitae diam ullamcorper commodo vitae nec lacus. Donec facilisis iaculis elit, vitae convallis est mattis nec. Nam odio eros,',
    image: 'https://images.squarespace-cdn.com/content/v1/52da9677e4b03d314575985a/45b8c4a7-152f-4430-9204-790c9a9d8c29/Budapest+Hotels+with+Best+Views+-+Matild+Palace%2C+a+Luxury+Collection+Hotel.jpg',
};

export function EditEditorBlogPost() {
    return (
        <div>
            <Typography.Title>Edit Blog Post</Typography.Title>
            <Divider />
            <EditorBlogPostForm initialValues={post} />
        </div>
    );
}
