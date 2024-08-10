import * as AllItems from '@repo/practice-vault-beginner';
import { useEffect } from 'react';

const meta = {
    title: 'Practice Vault - Beginner / Beginner',
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    args: {},
};

export default meta;

function Template(props) {
    const { Component } = props;

    useEffect(() => {
        const html = document.querySelector('html');
        if (html) {
            html.setAttribute('data-item', props.name);
        }
    }, [props.name]);

    return <Component />;
}

export const Item1Answer = {
    render: () => <Template name="item-1" Component={AllItems.Item1} />,
};

export const Item2Answer = {
    render: () => <Template name="item-2" Component={AllItems.Item2} />,
};

export const Item3Answer = {
    render: () => <Template name="item-3" Component={AllItems.Item3} />,
};
