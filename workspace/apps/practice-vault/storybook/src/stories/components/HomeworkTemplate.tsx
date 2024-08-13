import { useEffect } from 'react';
import AnswerLink from './AnswerLink.tsx';

type Props = {
    Component: any;
    item: number;
    week: number;
};

export default function HomeworkTemplate(props: Props) {
    const { Component, week, item } = props;

    useEffect(() => {
        const html = document.querySelector('html');
        if (html) {
            html.setAttribute('data-component', 'homework-answer-storybook');
            html.setAttribute('data-week', `week-${week}`);
            html.setAttribute('data-item', `item-${item}`);
        }

        return () => {
            if (html) {
                html.removeAttribute('data-component');
                html.removeAttribute('data-week');
                html.removeAttribute('data-item');
            }
        };
    }, [props.item, props.week]);

    return (
        <>
            <Component />
            <AnswerLink
                label="Homework Answer"
                prefix={`homework-answer/src/week-${props.week}`}
                name={`item-${props.item}`}
            />
        </>
    );
}
