import { useEffect } from 'react';
import AnswerLink from './AnswerLink.tsx';

type Props = {
    Component: any;
    name: string;
};

export default function PracticeItemTemplate(props: Props) {
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
