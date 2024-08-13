import * as AllItems from '@repo/practice-vault-beginner';
import { useEffect } from 'react';
import AnswerLink from './components/AnswerLink.tsx';

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
            html.setAttribute('data-component', 'practice-vault-storybook');
            html.setAttribute('data-item', props.name);
        }

        return () => {
            if (html) {
                html.removeAttribute('data-component');
                html.removeAttribute('data-item');
            }
        };
    }, [props.name]);

    return (
        <>
            <Component />
            <AnswerLink
                label="Practice Item Answer"
                prefix="practice-vault/src/answers"
                name={props.name}
            />
        </>
    );
}

export const Item1 = {
    render: () => <Template name="item-1" Component={AllItems.Item1} />,
};

export const Item2 = {
    render: () => <Template name="item-2" Component={AllItems.Item2} />,
};

export const Item3 = {
    render: () => <Template name="item-3" Component={AllItems.Item3} />,
};

export const Item4 = {
    render: () => <Template name="item-4" Component={AllItems.Item4} />,
};

export const Item5 = {
    render: () => <Template name="item-5" Component={AllItems.Item5} />,
};

export const Item6 = {
    render: () => <Template name="item-6" Component={AllItems.Item6} />,
};

export const Item7 = {
    render: () => <Template name="item-7" Component={AllItems.Item7} />,
};

export const Item8 = {
    render: () => <Template name="item-8" Component={AllItems.Item8} />,
};

export const Item9 = {
    render: () => <Template name="item-9" Component={AllItems.Item9} />,
};
