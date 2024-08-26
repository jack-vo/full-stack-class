import { CSSProperties } from 'react';
import './StorybookGithubLink.css';

type Props = {
    label: string;
    path: string;
};

const style: CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#222',
    color: '#fff',
    textDecoration: 'none',
    position: 'fixed',
    fontSize: '1.1em',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
};

export default function StorybookGithubLink(props: Props) {
    return (
        <a
            className="answer-link"
            target="_blank"
            href={`https://github.com/jack-vo/full-stack-class/tree/main/${props.path}`}
            style={style}
        >
            {props.label}
        </a>
    );
}
