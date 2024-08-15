import { TeachingTemplate } from '@repo/ui';
import App from '../src/App.jsx';

const meta = {
    title: 'Teaching / Week 24',
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    args: {},
};

export default meta;

export const ReactHtml = {
    render: () => (
        <TeachingTemplate prefix="week-24" item="react-html" Component={App} />
    ),
};
