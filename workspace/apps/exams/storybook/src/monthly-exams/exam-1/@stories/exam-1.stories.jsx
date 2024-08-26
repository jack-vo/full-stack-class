import { MonthlyExamTemplate } from '@repo/ui';
import App from '../src/App.jsx';

const meta = {
    title: 'Monthly Exams / Exam 1',
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    args: {},
};

export default meta;

export const Exam1 = {
    render: () => <MonthlyExamTemplate item="exam-1" Component={App} />,
};
