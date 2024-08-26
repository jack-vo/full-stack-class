import { useEffect } from 'react';
import StorybookGithubLink from './StorybookGithubLink';

type Props = {
    Component: any;
    type:
        | 'teaching'
        | 'homework'
        | 'practice'
        | 'monthly-exams'
        | 'final-exams';
    path: string;
    prefix?: string;
    item: string;
};

export function StorybookTemplate(props: Props) {
    const { Component, path, type, prefix, item } = props;

    useEffect(() => {
        const html = document.querySelector('html');
        if (html) {
            html.setAttribute('data-component', type);

            if (prefix) {
                html.setAttribute('data-prefix', prefix);
            }

            html.setAttribute('data-item', item);
        }

        return () => {
            if (html) {
                html.removeAttribute('data-component');
                html.removeAttribute('data-prefix');
                html.removeAttribute('data-item');
            }
        };
    }, [props.type, props.item, props.prefix]);

    return (
        <>
            <Component />
            <StorybookGithubLink label="GitHub Link" path={path} />
        </>
    );
}

export function PracticeVaultTemplate(
    props: Pick<Props, 'Component' | 'item'>,
) {
    return (
        <StorybookTemplate
            Component={props.Component}
            type="practice"
            item={props.item}
            path={`workspace/packages/practice-vault-beginner/src/answers/${props.item}`}
        />
    );
}

export function TeachingTemplate(
    props: Pick<Props, 'Component' | 'prefix' | 'item'>,
) {
    return (
        <StorybookTemplate
            Component={props.Component}
            type="teaching"
            prefix={props.prefix}
            item={props.item}
            path={`workspace/apps/teaching/storybook/src/${props.prefix}/${props.item}`}
        />
    );
}

export function HomeworkTemplate(
    props: Pick<Props, 'Component' | 'prefix' | 'item'>,
) {
    return (
        <StorybookTemplate
            Component={props.Component}
            type="homework"
            prefix={props.prefix}
            item={props.item}
            path={`workspace/apps/teaching/storybook/src/${props.prefix}/homework/${props.item}`}
        />
    );
}

export function MonthlyExamTemplate(props: Pick<Props, 'Component' | 'item'>) {
    return (
        <StorybookTemplate
            Component={props.Component}
            type="monthly-exams"
            item={props.item}
            path={`workspace/apps/exams/storybook/src/monthly-exams/${props.item}/src`}
        />
    );
}
