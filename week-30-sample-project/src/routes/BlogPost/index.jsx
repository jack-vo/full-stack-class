import { Button, Divider, Image, Tag, Typography } from 'antd';
import './BlogPost.css';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const post = {
    id: '001',
    title: 'The best hotel in Budapest',
    author: 'John Doe',
    tags: ['Budapest', 'Hotel'],
    image: 'https://images.squarespace-cdn.com/content/v1/52da9677e4b03d314575985a/45b8c4a7-152f-4430-9204-790c9a9d8c29/Budapest+Hotels+with+Best+Views+-+Matild+Palace%2C+a+Luxury+Collection+Hotel.jpg',
    description: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus id nibh et porttitor. Fusce pellentesque posuere felis ac dictum. Proin dictum maximus elit, a tincidunt urna fringilla non. Nulla in elementum ex, quis aliquam risus. Nam elementum tellus non lorem suscipit, at condimentum urna dapibus. Aliquam sed suscipit ligula, vel sollicitudin odio. Mauris at eros rutrum, efficitur lorem et, ultrices nulla.</p>
<p>Suspendisse potenti. Suspendisse vel dictum dolor, non aliquam neque. In hac habitasse platea dictumst. Proin aliquam bibendum enim a tristique. Nulla facilisi. Pellentesque pellentesque arcu quis quam convallis facilisis. Sed vel dui vulputate, convallis dui et, elementum dui. Sed sem felis, pellentesque non dolor at, commodo auctor neque. Nulla nisl diam, gravida nec augue vitae, tempus blandit erat. Curabitur pharetra faucibus ultricies. Duis non augue metus. Curabitur in dapibus eros, at laoreet augue.</p>
<p>Pellentesque hendrerit tempus sem, tempor aliquet lectus vulputate id. Aenean odio dolor, lacinia eget diam quis, posuere commodo justo. Ut pulvinar, est pretium convallis consequat, mauris lorem varius dolor, nec fringilla eros erat et massa. Aliquam sodales est lorem, nec convallis turpis dignissim a. Sed in ligula nec erat posuere fermentum nec non magna. Integer nec efficitur diam. In in metus euismod, iaculis metus eget, iaculis felis.</p>
<p>Vivamus nec ante turpis. Mauris tincidunt vulputate mattis. Donec vitae augue ut arcu aliquet suscipit. Phasellus eget vestibulum lectus. Praesent lacinia scelerisque ipsum nec convallis. Sed faucibus malesuada bibendum. Ut vel placerat nisi, vel rutrum est.</p>
<p>Fusce enim nunc, interdum a tincidunt vel, sodales eu leo. Etiam efficitur neque in mollis ultrices. Mauris lacinia efficitur mauris at congue. Vestibulum pulvinar luctus auctor. Quisque egestas ipsum efficitur, iaculis erat nec, tristique magna. Donec a felis dui. Nulla vitae nibh ut arcu efficitur euismod tincidunt mattis arcu. Mauris sagittis neque at vehicula congue. Nam scelerisque a tellus elementum dignissim. Praesent semper imperdiet tellus eget placerat. Aenean eget tellus arcu. Morbi porttitor dolor ut posuere aliquam. Mauris finibus tristique urna finibus viverra. Maecenas consequat eget urna nec lacinia. Donec nec nisi ut nibh mattis tristique eu ut mauris.</p>
`,
};

export function BlogPost() {
    const navigate = useNavigate();

    return (
        <div className="blog-post">
            <Button
                ghost
                size="large"
                shape="circle"
                className="back-button"
                title="Go back"
                onClick={() => navigate(-1)}
                icon={<LeftOutlined />}
            />
            <Image className="blog-post-image" src={post.image} />

            <div className="blog-post-body">
                <Typography.Title level={1} className="blog-post-title">
                    {post.title}
                </Typography.Title>
                <div className="blog-post-tags">
                    {post.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </div>
                <Divider orientation="center">{post.author}</Divider>
                <div
                    className="blog-post-text"
                    dangerouslySetInnerHTML={{ __html: post.description }}
                />
            </div>
        </div>
    );
}
