import { Link } from 'react-router-dom';
import { Button, Image, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import './EditorBlogPostList.css';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: (id) => <Link to={`/editor/posts/edit/${id}`}>{id}</Link>,
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (image) => <Image width={80} src={image} />,
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text, record) => (
            <Link to={`/editor/posts/edit/${record.id}`}>{text}</Link>
        ),
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    return <Tag key={tag}>{tag}</Tag>;
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <div className="actions">
                <Button
                    title="Edit"
                    icon={<EditOutlined />}
                    href={`/editor/posts/edit/${record.id}`}
                />
                <Button title="Delete" ghost danger icon={<DeleteOutlined />} />
            </div>
        ),
    },
];

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

export function EditorBlogPostList() {
    return (
        <div>
            <div className="list-toolbar">
                <Button
                    icon={<PlusOutlined />}
                    size="large"
                    type="primary"
                    href="/editor/posts/create"
                >
                    Create new post
                </Button>
            </div>
            <Table columns={columns} dataSource={posts} />
        </div>
    );
}
