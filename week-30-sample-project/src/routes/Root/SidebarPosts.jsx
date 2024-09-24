import { Card } from 'antd';
import './SidebarPosts.css';

const { Meta } = Card;

const posts = [
    {
        title: 'The best hotel in Budapest',
        description:
            'Nulla fermentum vulputate tempus. Curabitur pharetra nulla augue, vel sollicitudin sem pulvinar sed. Donec mollis non mauris non suscipit. Praesent eu eros vitae diam ullamcorper commodo vitae nec lacus. Donec facilisis iaculis elit, vitae convallis est mattis nec. Nam odio eros,',
        image: 'https://images.squarespace-cdn.com/content/v1/52da9677e4b03d314575985a/45b8c4a7-152f-4430-9204-790c9a9d8c29/Budapest+Hotels+with+Best+Views+-+Matild+Palace%2C+a+Luxury+Collection+Hotel.jpg',
    },
    {
        title: 'Heaven on Earth',
        description:
            'Curabitur pharetra nulla augue, vel sollicitudin sem pulvinar sed. Donec mollis non mauris non suscipit. Praesent eu eros vitae diam ullamcorper commodo vitae nec lacus. Donec facilisis iaculis elit, vitae convallis est ma',
        image: 'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/04/four-seasons-maui-at-wailea-hawaii-usa.jpg?fit=970%2C545&ssl=1',
    },
    {
        title: 'Europe Street beat',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat vehicula ex, eu lacinia felis tempor eget. Morbi id erat nec sem euismod tincidunt id nec justo. Sed quis imperdiet felis. Curabitur sollicitudin massa libero, vitae vestibulum mauris viverra et. Aenean urna dolor, fringilla et viverra vitae, eleifend nec urna. Mauris varius, dui at blandit suscipit, ligula urna consequat ex, quis lobortis lacus libero ut quam. Cras sagittis porttitor pulvinar. Nulla porttitor, justo eget malesuada dapibus, neque leo porta nulla, sit amet vulputate lorem neque eget sapien. Aenean fringilla libero eget placerat lobortis. Quisque sed sem nunc. Nunc lobortis malesuada urna ut pellentesque. Curabitur non lacus lectus. Vivamus elementum ligula dolor. Nulla blandit metus felis, a ornare nisi hendrerit sit amet. Integer ac diam sollicitudin, elementum felis a, cursus sem.',
        image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    },
];

export function SidebarPosts() {
    return (
        <div className="sidebar-posts">
            {posts.map((post) => (
                <Card
                    key={post.title}
                    hoverable
                    cover={<img alt={post.title} src={post.image} />}
                >
                    <Meta title={post.title} description={post.description} />
                </Card>
            ))}
        </div>
    );
}
