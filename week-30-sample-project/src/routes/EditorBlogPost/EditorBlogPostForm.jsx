import { Button, Form, Input, Upload, Divider } from 'antd';
import {
    CheckOutlined,
    CloseOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import './EditorBlogPostForm.css';
import { useNavigate } from 'react-router-dom';

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }

    return e?.fileList;
};

export function EditorBlogPostForm(props) {
    const navigate = useNavigate();
    const onFinish = () => {
        navigate('/editor/posts');
    };
    const onCancelClick = () => {
        navigate(-1);
    };

    return (
        <Form layout="vertical" size="large" {...props} onFinish={onFinish}>
            <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: 'Post title is required' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Description"
                name="description"
                rules={[
                    { required: true, message: 'Post description is required' },
                ]}
            >
                <Input.TextArea rows={10} />
            </Form.Item>
            <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
                <Upload
                    name="upload"
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture"
                >
                    <Button type="dashed" icon={<UploadOutlined />}>
                        Click to upload primary image
                    </Button>
                </Upload>
            </Form.Item>

            <Divider />
            <div className="form-actions">
                <Button
                    size="large"
                    icon={<CloseOutlined />}
                    onClick={onCancelClick}
                >
                    Cancel
                </Button>
                <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    icon={<CheckOutlined />}
                >
                    Submit
                </Button>
            </div>
        </Form>
    );
}
