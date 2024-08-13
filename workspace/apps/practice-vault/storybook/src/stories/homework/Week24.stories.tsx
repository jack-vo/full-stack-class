import * as Homework from '@repo/homework-answer';
import Template from './HomeworkTemplate';

const meta = {
    title: 'Homework Answers / Week 24',
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    args: {},
};

export default meta;

export const Item1 = {
    render: () => (
        <Template week={24} item={1} Component={Homework.Week24Item1} />
    ),
};

export const Item2 = {
    render: () => (
        <Template week={24} item={2} Component={Homework.Week24Item2} />
    ),
};

export const Item3 = {
    render: () => (
        <Template week={24} item={3} Component={Homework.Week24Item3} />
    ),
};
