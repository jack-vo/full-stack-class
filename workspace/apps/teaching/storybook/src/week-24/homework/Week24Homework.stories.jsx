import { HomeworkTemplate } from '@repo/ui';
import { default as HW1 } from './item-1/App';
import { default as HW2 } from './item-2/App';
import { default as HW3 } from './item-3/App';

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
        <HomeworkTemplate prefix="week-24" item="item-1" Component={HW1} />
    ),
};

export const Item2 = {
    render: () => (
        <HomeworkTemplate prefix="week-24" item="item-2" Component={HW2} />
    ),
};

export const Item3 = {
    render: () => (
        <HomeworkTemplate prefix="week-24" item="item-3" Component={HW3} />
    ),
};
