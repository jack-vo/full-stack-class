import { Card, Col, Image, Row, Tag, Typography } from 'antd';
import './RootContent.css';
import { Link } from 'react-router-dom';

const posts = [
    {
        id: '001',
        title: 'The best hotel in Budapest',
        tags: ['Budapest', 'Hotel'],
        description:
            'Nulla fermentum vulputate tempus. Curabitur pharetra nulla augue, vel sollicitudin sem pulvinar sed. Donec mollis non mauris non suscipit. Praesent eu eros vitae diam ullamcorper commodo vitae nec lacus. Donec facilisis iaculis elit, vitae convallis est mattis nec. Nam odio eros,',
        image: 'https://images.squarespace-cdn.com/content/v1/52da9677e4b03d314575985a/45b8c4a7-152f-4430-9204-790c9a9d8c29/Budapest+Hotels+with+Best+Views+-+Matild+Palace%2C+a+Luxury+Collection+Hotel.jpg',
    },
    {
        id: '002',
        title: 'Heaven on Earth',
        tags: ['Budapest', 'Hotel'],
        description:
            'Curabitur pharetra nulla augue, vel sollicitudin sem pulvinar sed. Donec mollis non mauris non suscipit. Praesent eu eros vitae diam ullamcorper commodo vitae nec lacus. Donec facilisis iaculis elit, vitae convallis est ma',
        image: 'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/04/four-seasons-maui-at-wailea-hawaii-usa.jpg?fit=970%2C545&ssl=1',
    },
    {
        id: '003',
        title: 'Heaven on Earth',
        tags: ['Budapest', 'Hotel'],
        description:
            'Curabitur pharetra nulla augue, vel sollicitudin sem pulvinar sed. Donec mollis non mauris non suscipit. Praesent eu eros vitae diam ullamcorper commodo vitae nec lacus. Donec facilisis iaculis elit, vitae convallis est ma',
        image: 'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/04/four-seasons-maui-at-wailea-hawaii-usa.jpg?fit=970%2C545&ssl=1',
    },
    {
        id: '004',
        title: 'Heaven on Earth',
        tags: ['Budapest', 'Hotel'],
        description:
            'Curabitur pharetra nulla augue, vel sollicitudin sem pulvinar sed. Donec mollis non mauris non suscipit. Praesent eu eros vitae diam ullamcorper commodo vitae nec lacus. Donec facilisis iaculis elit, vitae convallis est ma',
        image: 'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/04/four-seasons-maui-at-wailea-hawaii-usa.jpg?fit=970%2C545&ssl=1',
    },
    {
        id: '005',
        title: 'Heaven on Earth',
        tags: ['Budapest', 'Hotel'],
        description:
            'Curabitur pharetra nulla augue, vel sollicitudin sem pulvinar sed. Donec mollis non mauris non suscipit. Praesent eu eros vitae diam ullamcorper commodo vitae nec lacus. Donec facilisis iaculis elit, vitae convallis est ma',
        image: 'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/04/four-seasons-maui-at-wailea-hawaii-usa.jpg?fit=970%2C545&ssl=1',
    },
    {
        id: '006',
        title: 'Heaven on Earth',
        tags: ['Budapest', 'Hotel'],
        description:
            'Curabitur pharetra nulla augue, vel sollicitudin sem pulvinar sed. Donec mollis non mauris non suscipit. Praesent eu eros vitae diam ullamcorper commodo vitae nec lacus. Donec facilisis iaculis elit, vitae convallis est ma',
        image: 'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/04/four-seasons-maui-at-wailea-hawaii-usa.jpg?fit=970%2C545&ssl=1',
    },
    {
        id: '007',
        title: 'Heaven on Earth',
        tags: ['Budapest', 'Hotel'],
        description:
            'Curabitur pharetra nulla augue, vel sollicitudin sem pulvinar sed. Donec mollis non mauris non suscipit. Praesent eu eros vitae diam ullamcorper commodo vitae nec lacus. Donec facilisis iaculis elit, vitae convallis est ma',
        image: 'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/04/four-seasons-maui-at-wailea-hawaii-usa.jpg?fit=970%2C545&ssl=1',
    },
    {
        id: '008',
        title: 'Heaven on Earth',
        tags: ['Budapest', 'Hotel'],
        description:
            'Curabitur pharetra nulla augue, vel sollicitudin sem pulvinar sed. Donec mollis non mauris non suscipit. Praesent eu eros vitae diam ullamcorper commodo vitae nec lacus. Donec facilisis iaculis elit, vitae convallis est ma',
        image: 'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/04/four-seasons-maui-at-wailea-hawaii-usa.jpg?fit=970%2C545&ssl=1',
    },
];

const { Meta } = Card;

export function RootContent() {
    return (
        <div className="content-posts">
            {posts.map((post, index) => (
                <Row key={index} className="content-post">
                    <Col span={10}>
                        <Image
                            className="content-post-image"
                            src={post.image}
                        />
                    </Col>
                    <Col className="content-post-body" span={14}>
                        <div>
                            {post.tags.map((tag) => (
                                <Tag className="post-tag" key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </div>
                        <Typography.Title
                            className="content-post-title"
                            level={3}
                        >
                            <Link to={`posts/${post.id}`}>{post.title}</Link>
                        </Typography.Title>
                        <Typography.Text>{post.description}</Typography.Text>
                    </Col>
                </Row>
            ))}
        </div>
    );
}
